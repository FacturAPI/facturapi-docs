import assert from "node:assert/strict";
import { readFile, writeFile, mkdtemp, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { createRequire } from "node:module";
import { execFileSync } from "node:child_process";
import yaml from "js-yaml";
import openapiTS, { astToString } from "openapi-typescript";

const root = new URL("../", import.meta.url);
const contracts = [];
const presentationKeys = new Set([
  "description",
  "summary",
  "title",
  "example",
  "examples",
  "externalDocs",
  "x-codeSamples",
]);

function contract(value, key) {
  if (Array.isArray(value)) {
    const items = value.map((item) => contract(item));
    return ["required", "enum", "type"].includes(key) ? items.sort() : items;
  }
  if (value && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value)
        .filter(([name]) => !presentationKeys.has(name))
        .sort(([a], [b]) => a.localeCompare(b))
        .map(([name, nested]) => [name, contract(nested, name)]),
    );
  }
  return value;
}

for (const filename of ["openapi_v2.yaml", "openapi_v2.en.yaml"]) {
  const spec = yaml.load(await readFile(new URL(filename, root), "utf8"), {
    schema: yaml.JSON_SCHEMA,
  });
  function walk(value, path = []) {
    if (!value || typeof value !== "object") return;
    assert(
      !("nullable" in value),
      `Use OpenAPI 3.1 null unions: ${path.join(".")}`,
    );
    if (
      ((path[0] === "components" && path[1] === "schemas") ||
        path.includes("schema")) &&
      (typeof value.type === "string" || Array.isArray(value.type))
    ) {
      for (const type of Array.isArray(value.type) ? value.type : [value.type])
        assert(
          [
            "null", "boolean", "object", "array", "number", "string", "integer",
          ].includes(type),
          `Invalid schema type: ${path.join(".")}`,
        );
    }
    if (value.type === "string") {
      for (const item of value.enum || [])
        assert.equal(
          typeof item,
          "string",
          `String enum values must be quoted when needed: ${path.join(".")}`,
        );
      for (const key of ["example", "default"])
        if (key in value)
          assert.equal(
            typeof value[key],
            "string",
            `String ${key} must remain a string: ${path.join(".")}`,
          );
    }
    if (value.$ref?.startsWith("#/")) {
      let target = spec;
      for (const part of value.$ref.slice(2).split("/")) {
        target = target?.[part.replace(/~1/g, "/").replace(/~0/g, "~")];
      }
      assert(target, `Unresolved reference: ${value.$ref}`);
    }
    for (const [key, child] of Object.entries(value))
      if (!presentationKeys.has(key) && !["default", "enum", "const"].includes(key))
        walk(child, [...path, key]);
  }
  walk(spec);
  const ids = new Set();
  for (const items of [spec.paths, spec.webhooks || {}]) {
    for (const [path, item] of Object.entries(items)) {
      for (const [method, operation] of Object.entries(item)) {
        if (!operation.responses) continue;
        assert(operation.operationId, `Missing operationId: ${method} ${path}`);
        assert(
          !ids.has(operation.operationId),
          `Duplicate operationId: ${operation.operationId}`,
        );
        ids.add(operation.operationId);
        const params = [
          ...(item.parameters || []),
          ...(operation.parameters || []),
        ].map((parameter) =>
          parameter.$ref
            ? spec.components.parameters[parameter.$ref.split("/").at(-1)]
            : parameter,
        );
        for (const match of path.matchAll(/\{([^}]+)\}/g)) {
          assert(
            params.some(
              (parameter) =>
                parameter.in === "path" &&
                parameter.name === match[1] &&
                parameter.required === true,
            ),
            `Missing required path parameter: ${path}`,
          );
        }
      }
    }
  }
  contracts.push(
    contract({
      paths: spec.paths,
      webhooks: spec.webhooks,
      components: spec.components,
    }),
  );
  const directory = await mkdtemp(join(tmpdir(), "facturapi-openapi-"));
  try {
    await writeFile(
      join(directory, "schema.d.ts"),
      astToString(
        await openapiTS(new URL(filename, root), { defaultNonNullable: false }),
      ),
    );
    await writeFile(
      join(directory, "fixture.ts"),
      await readFile(new URL("test/openapi-types.fixture.txt", root)),
    );
    execFileSync(
      process.execPath,
      [
        createRequire(import.meta.url).resolve("typescript/bin/tsc"),
        "--noEmit",
        "--strict",
        "--skipLibCheck",
        "--target",
        "ES2022",
        "--moduleResolution",
        "node",
        join(directory, "fixture.ts"),
      ],
      { stdio: "inherit" },
    );
  } finally {
    await rm(directory, { recursive: true, force: true });
  }
  console.log(
    `${filename}: ${ids.size} operations, references and generated type contracts verified`,
  );
}
assert.deepEqual(
  contracts[0],
  contracts[1],
  "Spanish and English must describe the same API contract",
);
console.log("Locale contracts match");
