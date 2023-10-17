const path = require("path");

function resolveSrc(_path) {
  return path.join(__dirname, _path);
}
// vue.config.js
module.exports = {
  runtimeCompiler: true,
  lintOnSave: true,
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.mjs$/,
          include: /node_modules/,
          type: "javascript/auto",
        },
      ],
    },
    // Set up all the aliases we use in our app.
    resolve: {
      alias: {
        assets: resolveSrc("src/modules/core/assets"),
      },
    },
  },
  css: {
    // Enable CSS source maps.
    sourceMap: process.env.NODE_ENV !== "production",
  },
};
