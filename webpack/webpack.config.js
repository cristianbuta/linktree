const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
const rootDirectory = __dirname + "/..";
const isDevelopment = process.env.NODE_ENV !== "production";
const webappDirectory = path.join("src");

const devServer = require("./devServer")(rootDirectory);
const _module = require("./module")(rootDirectory);
const plugins = require("./plugins")(
  rootDirectory,
  webappDirectory,
  isDevelopment
);
const config = {
  target: "web",
  mode: isDevelopment ? "development" : "production",
  entry: {
    index: path.join(rootDirectory, webappDirectory, "index.tsx"),
  },
  output: {
    filename: "[name].bundle.js",
    path: path.join(rootDirectory, "dist"),
    clean: true,
  },
  resolve: {
    extensions: [
      ".ts",
      ".tsx",
      ".js",
      ".jsx",
      ".svg",
      ".png",
      ".jpg",
      ".jpeg",
      ".webp",
    ],
    alias: {
      "~components": path.join(rootDirectory, webappDirectory, "components"),
      "~constants": path.join(rootDirectory, webappDirectory, "constants"),
      "~types": path.join(rootDirectory, webappDirectory, "types"),
      "~images": path.join(rootDirectory, webappDirectory, "images"),
    },
  },
  optimization: {
    minimize: !isDevelopment,
    minimizer: [new TerserPlugin()],
  },
  plugins,
  devServer,
  module: _module,
};

if (isDevelopment) config.devtool = "eval-source-map";

module.exports = config;
