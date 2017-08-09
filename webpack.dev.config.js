/*
    ./webpack.config.js
*/
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './client/index.html',
    filename: 'index.html',
    inject: 'body'
});

const ExtractTextPluginConfig = new ExtractTextPlugin('styles/main.css', {
    allChunks: true,
    disable: true
});

function sourceMapName(info) {
    var p = info.resourcePath;
    p = p.replace(/~/g, 'node_modules');
    if (path.isAbsolute(p))
        p = path.relative(root, p);
    p = path.normalize(p);
    return p.replace(/\\/g, '/');
}

module.exports = {
    entry: './client/index.jsx',
    devtool: 'eval',
    output: {
        devtoolModuleFilenameTemplate: sourceMapName
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
            { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
            { test: /\.scss$/, loader: ExtractTextPlugin.extract('css-loader!sass-loader') },
            { test: /\.png$/, loader: "url-loader?limit=100000" },
            { test: /\.jpg$/, loader: "file-loader" },
        ]
    },
    plugins: [
        HtmlWebpackPluginConfig, 
        ExtractTextPluginConfig
    ]
}