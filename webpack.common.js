var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'app');
var IMAGES_PATH = path.resolve(ROOT_PATH, 'app/images');
var FONTS_PATH = path.resolve(ROOT_PATH, 'app/fonts');
var JS_PATH = path.resolve(ROOT_PATH, 'app/js');
var SCSS_PATH = path.resolve(ROOT_PATH, 'app/scss');

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
            test: /\.scss$/,
            loaders: [
                'classnames-loader',
                'style-loader',
                'css-loader?modules=1&sourceMap&importLoaders=1&localIdentName=[name]_[local]',
                'postcss-loader',
                'sass-loader'
            ],
            include: APP_PATH
        }, {
            test: /\.jsx?$/,
            loader: 'babel-loader',
            include: JS_PATH,
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
        new webpack.DefinePlugin({
        }),

        new HtmlWebpackPlugin({
            template: 'app/index.html',
        }),
    ]

}
