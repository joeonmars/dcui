const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const ROOT_PATH = path.resolve(__dirname);
const STORIES_PATH = path.resolve(ROOT_PATH, 'storybook/stories');
const APP_PATH = path.resolve(ROOT_PATH, 'app');
const IMAGES_PATH = path.resolve(ROOT_PATH, 'app/images');
const FONTS_PATH = path.resolve(ROOT_PATH, 'app/fonts');
const JS_PATH = path.resolve(ROOT_PATH, 'app/js');
const SCSS_PATH = path.resolve(ROOT_PATH, 'app/scss');

module.exports = {
    entry: JS_PATH,

    output: {
        filename: '[name].js',
    },

    resolve: {
        alias: {
            'images': IMAGES_PATH,
            'fonts': FONTS_PATH,
            'js': JS_PATH,
            'styles': SCSS_PATH,
        },
        extensions: ['.js', '.jsx', '.scss'],
    },

    module: {
        rules: [{
            test: /\.jsx?$/,
            loader: 'babel-loader',
            include: [JS_PATH, STORIES_PATH],
            query: {
                presets: ['react', 'es2015', 'stage-2']
            }
        }, {
            test: /\.(jpe?g|png|gif|svg)$/,
            loader: 'file-loader',
            include: IMAGES_PATH,
        }, {
            test: /\.(woff|woff2)$/,
            loader: 'url-loader',
            include: FONTS_PATH,
        }, {
            test: /\.html$/,
            loader: 'html-loader'
        }],
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: 'app/index.html',
        }),
    ]

}
