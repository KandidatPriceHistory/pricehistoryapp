module.exports = {
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
        }, {
                test: /\.scss$/,
                use: [{
                        loader: "style-loader" // creates style nodes from JS strings
            }, {
                        loader: "css-loader" // translates CSS into CommonJS
            }, {
                        loader: "sass-loader" // compiles Sass to CSS
            }
            ]
          }, {
                test: /\.(png|jpg)$/,
                loader: 'url-loader'
}
    ]
    },
    resolve: {
        extensions: [
                    ".js", ".jsx", ".scss"
        ]
    }
};
