const Prism = require("prismjs");

globalThis.Prism = Prism;
if (typeof global !== "undefined") {
  global.Prism = Prism;
}

require("prismjs/components/prism-javadoclike");
require("prismjs/components/prism-java");
require("prismjs/components/prism-scala");

module.exports = Prism;
