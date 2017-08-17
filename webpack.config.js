var path = require('path');
var webpack = require('webpack');
var DefinePlugin = require('webpack/lib/DefinePlugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var ProgressBarPlugin = require('progress-bar-webpack-plugin');
var ngtools = require('@ngtools/webpack');
var plugins = require("./plugins");

module.exports = {
    entry: {
        bootstrap: [__dirname + '/src/bootstrap.ts'],
        angular: ['@angular/core', '@angular/platform-browser', '@angular/common', '@angular/router', '@angular/http', '@angular/forms', '@ntesmail/shark-angular2'],
        polyfill: ['zone.js/dist/zone', 'reflect-metadata'],
        thirdparty: [/*'./node_modules/bootstrap/dist/js/bootstrap.min.js',*/'./src/packages/bootstrap-datetimepicker/js/bootstrap-datetimepicker.js','./src/utils/commons.js'],
        app_css:plugins.css
        
    },
    output: {
        path: path.join(__dirname, 'build', 'client'),
        filename: 'js/[name].js',
        chunkFilename: 'js/[name].js',
        publicPath: './'
    },
    module: {
        loaders: [
            {
                test: /\.ts$/,
                loader: [
                    '@ngtools/webpack',
                    'angular2-router-loader?aot=true&genDir=aot/'
                ]
            }, {
                test: /\.html$/,
                loader: 'raw-loader',
                //include: path.join(__dirname, 'src/main/')
            }, /*{
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                query: {
                    name: 'images/[name].[ext]',
                    limit: 100
                }
            },*/ {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' })
            }, {
                test: /\.scss$/,
                include: [
                    path.join(__dirname, 'src')
                ],
                loaders: [
                    'to-string-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            { test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/, loader: 'url-loader?limit=50000&name=[path][name].[ext]'}
        ]
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    plugins: [
        new ProgressBarPlugin(),
        /*new webpack.optimize.UglifyJsPlugin({
            comments: false,
            compress: {
                warnings: false
            }
        }),*/
        /*new webpack.NoEmitOnErrorsPlugin(),
        new DefinePlugin({
            'ENV': '"prod"'
        }),*/
        new ExtractTextPlugin('[name].css'),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: __dirname + '/src/index.html',
            inject: true, // 自动注入
            minify: {
                removeComments: true,        //去注释
                collapseWhitespace: true,    //压缩空格
                removeAttributeQuotes: true  //去除属性引用
            },
            //必须通过上面的 CommonsChunkPlugin 的依赖关系自动添加 js，css 等
            chunksSortMode: 'dependency'
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
          /*  Flatpickr: 'flatpickr',
            echarts: 'echarts'*/
        }),
        new webpack.optimize.CommonsChunkPlugin({
            names: ['bootstrap', 'angular', 'polyfill', 'thirdparty','manifest'],
            allChunks: true,  // chunks是需要提取的模块
            minChunks: Infinity  //公共模块最小被引用的次数
        }),
        new ngtools.AotPlugin({
            skipCodeGeneration: false,   //默认false. false：使用AoT ; true：不使用AoT 
            tsConfigPath: path.join(__dirname, 'tsconfig.json')
        })
    ]
}