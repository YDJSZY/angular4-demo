var webpack = require('webpack');
var webpackconf = require('./webpack.config.js');

webpack(webpackconf, function (err, states) {
    if (err) {
        throw err;
    }
    process.stdout.write(states.toString({
        watching:true,
        colors: true,
        modules: true,
        children: true,
        chunks: true,
        chunkModules: true
    }) + '\n');
});