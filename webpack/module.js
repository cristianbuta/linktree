module.exports = () => ({
  rules: [
    { test: /\.(ts|tsx|jsx|js)$/, loader: "ts-loader" },
    { test: /\.css$/, use: ["style-loader", "css-loader"] },
    {
      test: /\.(jpg|png|webp|svg|gif)$/,
      type: "asset/resource",
    },
  ],
});
