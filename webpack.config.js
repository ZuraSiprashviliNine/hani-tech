const path = require('path');

const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');

const BUILD_DIR = path.join(__dirname, 'dist');
const APP_DIR = path.join(__dirname, 'src');

const VENDOR_LIBS = [
    "animate.css",
    "axios",
    "react",
    "react-custom-scrollbars",
    "react-dom",
    "react-fontawesome",
    "react-loadable",
    "react-particles-js",
    "react-redux",
    "react-router-dom",
    "react-text-scrambler",
    "redux",
    "redux-logger",
    "redux-promise-middleware",
    "redux-thunk"
];

module.exports = {
    entry: {
        app: APP_DIR,
        vendor: VENDOR_LIBS
    },
    output: {
        path: BUILD_DIR,
        filename: process.env.NODE_ENV !== 'development' ? '[name].[chunkhash].bundle.js' : '[name].[hash].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(jsx|js)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(jpe?g|png|gif|svg|otf|woff(2)?|ttf|eot|svg)$/i,
                use: 'file-loader'
            }
        ]
    },
    optimization: {
        runtimeChunk: true,
        splitChunks: { chunks: 'all' },
    },
    devServer: {
        contentBase: BUILD_DIR,
        compress: true,
        port: 669,
        hot: true
    },
    mode: process.env.NODE_ENV,
    plugins: [
        new htmlWebpackPlugin({
            template: path.join(__dirname, 'src', 'index.html')
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        })
    ]
}

if(process.env.NODE_ENV === 'development'){
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.HotModuleReplacementPlugin(),
    ])
}