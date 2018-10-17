const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: ['./src/index.js'],
    output: {
      path: path.join(__dirname, 'src', 'public'),
      filename: 'index_bundle.js'
    }, module: {
      rules: [{
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      },       
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./src/index.html"
      })
    ]
}; 