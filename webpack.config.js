const   path = require('path'),
        HtmlWebpackPlugin = require('html-webpack-plugin'),
    webpack = require('webpack'),
    CleanWebpackPlugin = require('clean-webpack-plugin');

const config = {
    entry: ['whatwg-fetch', 'babel-polyfill', './app/index.js'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.bundle.js',
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
    performance: {hints: false},
    plugins: [
        new HtmlWebpackPlugin({
            template: 'app/index.html'
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
};

if (process.env.NODE_ENV === 'production') {
    config.plugins.push(
        new CleanWebpackPlugin(['dist']),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common' // Specify the common bundle's name.
        }),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true
        })
    );
    config.devtool = 'source-map';
}

module.exports = config;