const path = require('path');
const HTMLPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

const config = {
    mode: 'development',
    target: 'web',
    entry: path.join(__dirname, 'src/index.js'),
    output: {
        filename: "bundle.js",
        path: path.join(__dirname, 'dist'),
    },
    module: {
        rules: [{
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }, {
                test: /\.css/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }, {
                test: /\.styl/,
                use: [
                    'style-loader',
                    'css-loader',
                    'stylus-loader'
                ]
            }, {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 1024,
                        name: '[name]-aaa.[ext]'
                    }
                }]
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HTMLPlugin()
    ]

}

config.devServer = {

        // 设置服务器的ip地址,可以是localhost
        host: 'localhost',
        // 设置端口
        port: 8090,
        // 设置自动拉起浏览器
        // open:true
        overlay: {
            errors: true,
        },
        hot: true
    },


    module.exports = config