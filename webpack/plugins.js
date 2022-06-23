const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ProvidePlugin } = require("webpack");

module.exports = (rootDirectory, webappDirectory) => {
  return [
    new HtmlWebpackPlugin({
      template: path.join(rootDirectory, webappDirectory, "index.html"),
      cache: false,
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.join(rootDirectory, webappDirectory, "public"),
          to: path.join(rootDirectory, "dist"),
        },
      ],
    }),
    new ProvidePlugin({
      process: require.resolve("process/browser"),
    }),
  ];
};
