const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const ROOT_PATH = path.resolve(__dirname);
const STORIES_PATH = path.resolve(ROOT_PATH, 'storybook/stories');
const APP_PATH = path.resolve(ROOT_PATH, 'app');


module.exports = merge(common, {

    module: {
        rules: [{
            test: /\.scss$/,
            loaders: [
                'classnames-loader',
                'style-loader',
                'css-loader?modules=1&sourceMap&importLoaders=1&localIdentName=[name]_[local]',
                'postcss-loader',
                'sass-loader'
            ],
            include: [APP_PATH, STORIES_PATH]
        }],
    },

    devServer: {
        disableHostCheck: true,
        host: '0.0.0.0',
        headers: {
            'Access-Control-Allow-Origin': '*',
        }
    },

});
