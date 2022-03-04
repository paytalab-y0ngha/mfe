const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const port = process.env.PORT || 3000;

module.exports = {
  entry: "./src/index.tsx",
  devServer: {
    port: port,
    historyApiFallback: true, 
    // inline: true,
    proxy: {
      // "/api/**": "http://[::1]:8000"
      '/api/**': { 
        target: 'http://localhost:8000',
        changeOrigin: true, 
        pathRewrite: { '^/api': '' },
        secure: false,
        // onProxyReq: (proxyReq) => {
        //   if (proxyReq.getHeader('origin')) {
        //     proxyReq.setHeader('origin', 'http://localhost:8000')
        //   }
        // }
      },
    },
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
      //   "@lib": path.resolve(__dirname, "lib"),
      //   "@util": path.resolve(__dirname, "src/util"),
    },
    extensions: [".jsx", ".tsx", ".ts", ".js", ".json"],
  },
  output: {
    path: path.resolve(__dirname, "dist/"),
    publicPath: "/",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "index.html",
    }),
  ],
};
