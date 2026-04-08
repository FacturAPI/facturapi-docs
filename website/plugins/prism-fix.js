module.exports = function prismFixPlugin() {
  return {
    name: "prism-fix",
    configureWebpack() {
      return {
        resolve: {
          alias: {
            "prismjs/components/prism-scala.js$": require.resolve(
              "../src/prism/prism-scala.js"
            ),
            "prismjs/components/prism-scala$": require.resolve(
              "../src/prism/prism-scala.js"
            ),
          },
        },
      };
    },
  };
};
