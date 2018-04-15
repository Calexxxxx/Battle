const   path = require('path'),
        HtmlWebpackPlugin = require('html-webpack-plugin'),
        webpack = require('webpack');

const config = {
    entry: ['whatwg-fetch', 'babel-polyfill', './app/index.js'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.[hash].js',
        publicPath: '/'
    },
    module: {
        rules: [
            { test: /\.(js)$/, use: 'babel-loader', exclude: /node_modules/  },
            { test: /\.css$/, use: ['style-loader', 'css-loader'] }
        ]
    },
    devtool: 'inline-source-map',
    devServer: {
        historyApiFallback: true,
        hot: true,
        contentBase: './dist'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'app/index.html'
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
};

if (process.env.NODE_ENV === 'production') {
    config.plugins.push(
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
            }
        }),
        new webpack.optimize.UglifyJsPlugin()
    )
}

module.exports = config;