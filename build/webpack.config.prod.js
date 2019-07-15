const merge = require('webpack-merge');
const Webpack = require('webpack');
const baseConfig = require('./webpack.config.base');
const ExtractTextPlugin = require("extract-text-webpack-plugin"); //webpack4.0不支持，可能用，有缺陷，支持HMR需disable插件
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const prodConfig = {
    mode: 'production',
    optimization: {
        minimizer: [
        new UglifyJsPlugin({
            uglifyOptions: {
            ie8: true
            }
        })
        ]
    },
    output: {
        filename: '[name].min.[hash].js',
        path: __dirname + '/dist'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [ 'style-loader' , 'css-loader', 'postcss-loader']
            },{
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract({
                  fallback: "style-loader",
                  use: ["css-loader","postcss-loader", "sass-loader"]
                })
              }
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: "css/style.[name].[chunkhash].css",
            allChunks: true
        }), //css单独打包文件
    ]
}

module.exports = merge(baseConfig, prodConfig);