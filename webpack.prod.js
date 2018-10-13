const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const ROOT_PATH = path.resolve(__dirname);
const APP_PATH = path.resolve(ROOT_PATH, 'app');
const BUILD_PATH = path.resolve(ROOT_PATH, 'build/app');


module.exports = merge(common, {

    output: {
        filename: 'bundle.js',
        path: BUILD_PATH,
    },

    module: {
        rules: [{
            test: /\.scss$/,
            use: [
                'classnames-loader',
                ...ExtractTextPlugin.extract({
                    use: [
                        'css-loader?modules=1&importLoaders=1&localIdentName=[name]_[local]',
                        'postcss-loader',
                        'sass-loader?outputStyle=compressed',
                    ],
                }),
            ],
        }]
    },

    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production'),
        }),

        new ExtractTextPlugin({
            filename: 'bundle.css',
            allChunks: true,
        }),
    ]

});
