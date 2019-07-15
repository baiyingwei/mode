const merge = require('webpack-merge');
const Webpack = require('webpack');
const baseConfig = require('./webpack.config.base');
const devConfig = {
    mode: 'development', //增加mode配置。。。启动文件命令不需加 NODE_ENV=xxx 会自动加上
    devtool: "eval-source-map", // 生成 source map文件
    output: {
        filename: '[name].min.[hash].js',
        path: __dirname + '/dist'
    },
    devServer: {
        hot: true,
        port: 8889,
        compress: true,
        clientLogLevel: "none",
        host: "0.0.0.0",
        disableHostCheck: true,
        inline: true,
        historyApiFallback: true, // 该选项的作用所有的404都连接到index.html
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [ 'style-loader' , 'css-loader', "postcss-loader"]
            },{
                test: /\.scss$/,
                use: [ 'style-loader' , 'css-loader', "postcss-loader","sass-loader"]
              }
        ]
    },
    plugins: [
        new Webpack.HotModuleReplacementPlugin(), //热部署替换，只替换修改过的，开发
    ]
}

module.exports = merge(devConfig, baseConfig);