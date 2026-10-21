const { readFile, writeFile } = require("node:fs/promises");
const path = require("node:path");
const redocusaurus = require("redocusaurus").default;
const preparePresentation = require("./presentation");
const initialStyles = require("./initial-styles");

module.exports = async function apiReferencePreset(context, options) {
  const preset = await redocusaurus(context, options);
  return {
    ...preset,
    plugins: [
      ...preset.plugins.map(([pluginPath, pluginOptions]) => {
        const redocPlugin = require(pluginPath);
        function presentationPlugin(pluginContext, pluginOptions) {
          const plugin = redocPlugin.default(pluginContext, pluginOptions);
          return {
            ...plugin,
            async loadContent() {
              const content = await plugin.loadContent();
              return {
                ...content,
                // Keep the original bundle for downloads; render only this prepared copy.
                converted: preparePresentation(
                  content.converted,
                  pluginOptions.id.slice(4),
                ),
              };
            },
            getPathsToWatch() {
              return [
                ...plugin.getPathsToWatch(),
                require.resolve("./presentation"),
              ];
            },
          };
        }
        presentationPlugin.validateOptions = redocPlugin.validateOptions;
        return [presentationPlugin, pluginOptions];
      }),
      function initialReferenceStyles() {
        return {
          name: "initial-reference-styles",
          async postBuild({ outDir }) {
            const filename = path.join(outDir, "api/index.html");
            const html = await readFile(filename, "utf8");
            // Match initial server classes as well as hydrated dark-theme classes.
            // Remove after upstream fixes https://github.com/rohit-gohri/redocusaurus/issues/215.
            await writeFile(
              filename,
              html.replace(
                /(<style\b[^>]*>)([\s\S]*?)(<\/style>)/g,
                (style, start, css, end) =>
                  css.includes("data-styled.g")
                    ? start + initialStyles(css) + end
                    : style,
              ),
            );
          },
        };
      },
    ],
  };
};
