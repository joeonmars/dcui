var merge = require('webpack-merge');
var common = require('./webpack.common.js');



module.exports = merge(common, {

    devServer: {
        disableHostCheck: true,
        host: '0.0.0.0',
        headers: {
            'Access-Control-Allow-Origin': '*',
        }
    },

});
