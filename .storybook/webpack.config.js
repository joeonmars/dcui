// you can use this file to add your custom webpack plugins, loaders and anything you like.
// This is just the basic way to add additional webpack configurations.
// For more information refer the docs: https://storybook.js.org/configurations/custom-webpack-config

const defaultWebpack = require('../webpack.common');
const path = require('path');

module.exports = {
	module: {
		rules: defaultWebpack.module.rules
	},
	resolve: {
		alias: {
			images: path.resolve(__dirname, '../app/images'),
			fonts: path.resolve(__dirname, '../app/fonts'),
			js: path.resolve(__dirname, '../app/js'),
			styles: path.resolve(__dirname, '../app/scss'),
		}
	}
};
