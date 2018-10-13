// you can use this file to add your custom webpack plugins, loaders and anything you like.
// This is just the basic way to add additional webpack configurations.
// For more information refer the docs: https://storybook.js.org/configurations/custom-webpack-config

const defaultWebpack = require('../webpack.prod');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	module: defaultWebpack.module,
	resolve: defaultWebpack.resolve,
	plugins: [
        new ExtractTextPlugin({
            filename: 'bundle.css',
            allChunks: true,
        }),
    ]
};
