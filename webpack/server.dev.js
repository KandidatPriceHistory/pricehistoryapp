const path = require('path');
const res = p => path.resolve(__dirname, p);

const entry = res('../src/server/render.js');
const output = res('../dist/server');

module.exports = {
    name: 'server',
    target: 'node',
    mode: 'development',
    node: {
        __dirname: false,
        __filename: false,
    },
    devtool: 'eval',
    entry: [entry],
    output: {
        path: output,
        filename: 'render.js',
        libraryTarget: 'commonjs2'
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
            'node_modules'
        ]
    },
};
