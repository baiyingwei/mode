const HtmlWebpackPlugin = require('html-webpack-plugin');
const Webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    optimization: {
        splitChunks: {
          // include all types of chunks
          chunks: 'all'
        }
    },
    resolve: {
        //自动扩展文件后缀名
        extensions: [".js", ".jsx", ".scss", ".png", ".jpg", ".gif"],
        //模块别名定义，方便直接引用别名
        alias: {
        //   component: path.resolve(__dirname, "./src/component"),
        },
        // 参与编译的文件
        modules: ["src", "node_modules"]
      },
    entry: {
        mode: ["@babel/polyfill", "./src/index.js"]
    },
    module: {
        rules: [
            {
                test: /\.js(x?)$/,
                exclude: /node_modules/,
                use: ["babel-loader"],
                // options: {
                    
                // }
            },{
                test: /\.(png|jpg|gif)$/,
                loader: "url-loader",
                options: {
                    name: "[hash].[ext]",
                    limit: 100000 // 100kb
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "MODE",
            filename: "./index.html",
            template: "./index.html",
        }),
        new CleanWebpackPlugin()
    ]
}