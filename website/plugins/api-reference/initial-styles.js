const assert = require("node:assert/strict");
const postcss = require("postcss");

module.exports = function initialStyles(css) {
  const root = postcss.parse(
    css.replaceAll("html([data-theme='dark'])", "html[data-theme='dark']"),
  );
  const light = new Map();
  const dark = new Map();
  // styled-components records each component's generated classes in its SSR CSS.
  root.walkRules((rule) => {
    if (!rule.selector.includes("data-styled.g")) return;
    const id = rule.selector.match(/\[id="([^"]+)"\]/)?.[1];
    const content = rule.nodes.find((node) => node.prop === "content")?.value;
    assert(id && content, "Unrecognized styled-components SSR metadata");
    const classes = JSON.parse(content).split(",").filter(Boolean);
    (rule.selector.startsWith("html:not(") ? light : dark).set(id, classes);
  });
  assert(
    light.size && light.size === dark.size,
    "SSR theme component sets differ",
  );
  const aliases = new Map();
  for (const [id, classes] of light) {
    assert.equal(
      classes.length,
      dark.get(id)?.length,
      `SSR theme variants differ for ${id}; review initial styles before publishing`,
    );
    classes.forEach((lightClass, index) => {
      const darkClass = dark.get(id)[index];
      if (lightClass === darkClass) return;
      assert(
        !aliases.has(darkClass) || aliases.get(darkClass) === lightClass,
        "Ambiguous SSR theme class mapping",
      );
      aliases.set(darkClass, lightClass);
    });
  }
  root.walkRules((rule) => {
    if (!rule.selector.startsWith("html[data-theme='dark']")) return;
    // Match both the server's light-theme classes and the hydrated dark classes.
    // :is() keeps the original specificity and leaves the original class supported.
    rule.selector = rule.selector.replace(
      /\.([a-zA-Z_][\w-]*)/g,
      (selector, name) =>
        aliases.has(name) ? `:is(${selector},.${aliases.get(name)})` : selector,
    );
  });
  return root.toString();
};
