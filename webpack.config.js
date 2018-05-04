const path = require('path');
const HTMLPlugin = require('html-webpack-plugin')
const isDEV = process.env.NODE_ENV === 'development'
const webpack = require('webpack')

const config = {
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
        }]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: isDEV ? '"development"' : '"production"'
            }
        }),
        new HTMLPlugin()
    ]
}

if (isDev) {
    config.devServer = {
        port: '9000',
        host: '0.0.0.0',
        overlay: {
            errors: true,
        },
        //open: true,
        hot: true
    }
}

module.exports = config