import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readFile, writeFile } from "node:fs/promises";

const root = new URL("../", import.meta.url);
const hashes = [];
for (const filename of ["openapi_v2.yaml", "openapi_v2.en.yaml"]) {
  hashes.push(
    `${createHash("sha256")
      .update(await readFile(new URL(filename, root)))
      .digest("hex")}  ${filename}`,
  );
}
const content = hashes.join("\n") + "\n";
const target = new URL("openapi.sha256", root);
if (process.argv.includes("--check")) {
  assert.equal(
    await readFile(target, "utf8"),
    content,
    "OpenAPI hashes are stale. Run pnpm hash:openapi.",
  );
} else {
  await writeFile(target, content);
}
