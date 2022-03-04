const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const port = process.env.PORT || 3001;

module.exports = {
  entry: "./src/index.tsx",
  devServer: {
    port: port,
    // contentBase: "./dist",
    // inline: true,
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        loader: "ts-loader",
      },
      {
        test: /\.(sa|sc|c)ss$/i,
        exclude: /node_modules/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: "file-loader",
        options: {
          name: "assets/img/[name].[ext]?[hash]",
          esModule: false,
        },
      },
    ],
  },
  resolve: {
    modules: [path.resolve(__dirname, "src"), "node_modules"],
    alias: {
      "@src": path.resolve(__dirname, "src"),
    },
    extensions: [".jsx", ".tsx", ".ts", ".js", ".json"],
  },
  output: {
    path: path.resolve(__dirname, "dist/"),
    publicPath: "./",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "index.html",
    }),
  ],
};
