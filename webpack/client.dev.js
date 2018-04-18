const path = require('path');
const BUILT_ASSETS_FOLDER = '/assets/';

module.exports = {
    name: 'client',
    target: 'web',
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    entry: [
        'babel-polyfill',
        'react-hot-loader/patch',
        path.resolve(__dirname, '../', 'src', 'app', 'index')
    ],
    output: {
        filename: '[name].js',
        chunkFilename: '[name].js',
        path: path.join(__dirname, '../', 'dist', 'client'),
        publicPath: BUILT_ASSETS_FOLDER
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: 'style-loader' // creates style nodes from JS strings
                }, {
                    loader: 'css-loader' // translates CSS into CommonJS
                }, {
                    loader: 'sass-loader' // compiles Sass to CSS
                }
                ]
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader'
            }
        ]
    },
    resolve: {
        extensions: [
            '.js', '.jsx', '.scss'
        ],
        modules: [
            path.join(__dirname, '../', 'src', 'app'),
            'node_modules'
        ]
    }
};
