var path = require('path');
var merge = require('webpack-merge');
var common = require('./webpack.common.js');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var ROOT_PATH = path.resolve(__dirname);
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');


module.exports = merge(common, {

    output: {
        filename: 'bundle.js',
        path: BUILD_PATH,
    },

    module: {
        rules: [{
            test: /\.scss$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: [
                    'css-loader',
                    'postcss-loader',
                    'sass-loader?outputStyle=expanded'
                ]
            })
        }]
    },

    plugins: [
        new ExtractTextPlugin({
            filename: 'bundle.css',
            allChunks: true
        }),
    ]

});
