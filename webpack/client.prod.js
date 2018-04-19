const path = require('path');
const webpack = require('webpack');

const BUILT_ASSETS_FOLDER = '/assets/';

module.exports = {
    name: 'client',
    target: 'web',
    devtool: false,
    mode: 'production',
    entry: [
        'babel-polyfill',
        path.resolve(__dirname, '../', 'src', 'app', 'index'),
    ],
    output: {
        filename: '[name].js?v=[chunkhash]',
        chunkFilename: '[name].js?v=[chunkhash]',
        path: path.join(__dirname, '../', 'dist', 'client'),
        publicPath: BUILT_ASSETS_FOLDER,
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
        modules: [
            path.join(__dirname, '../', 'src', 'app'),
            'node_modules',
        ],
    },
    plugins: [
        new webpack.EnvironmentPlugin({
            NODE_ENV: 'production',
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true,
        }),
        new webpack.DefinePlugin({
            'process.env.BROWSER': true,
        }),
        new webpack.HashedModuleIdsPlugin(), // not needed for strategy to work (just good practice)
    ],
};
