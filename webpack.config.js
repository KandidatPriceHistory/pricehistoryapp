const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
        {
            test: /\.html$/,
            use: [{
                loader: "html-loader",
                options: {minimize: true}
            }]
        }
    ]
  },
    //Resolve ger information om att det är både js och jsx som hanteras
        resolve: {
          extensions: [
              '.js', '.jsx'
          ]
      },
    plugins: [
        new HtmlWebpackPlugin ({
            template: "./src/index.html",
            filename: "./index.html"
        })
    ]
};