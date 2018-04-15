# React project from scratch

## Table of contents

* [Installation](#installation)
    * [Scripts](#scripts)
* [File Structure](#file-structure)
* [Webpack Config](#webpack)
* [Dependencies](#dependencies)


## Installation

Clone, Fork or download the repo

```
git clone https://github.com/Calexxxxx/Battle.git 
cd battle
npm install
```

### Scripts

Start the webpack dev server
```$xslt
npm start 
```

## File Structure

basic file structure 
```
app/
    components/
        App.js
    index.css
    index.html
    index.js
.babelrc
.gitignore
package.json
package-lock.json
README.md
webpack.config.js
```

## Webpack

Basic webpack configuration for a react app

```
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
    devServer: {
        historyApiFallback: true,
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
```

## Dependencies

Dependencies needed to start this project
```
"dependencies": {
    "babel-polyfill": "^6.26.0",
    "prop-types": "^15.6.1",
    "react": "^16.3.1",
    "react-dom": "^16.3.1",
    "react-router-dom": "^4.2.2",
    "whatwg-fetch": "^2.0.4"
  },
  "devDependencies": {
    "babel-core": "^6.26.0",
    "babel-loader": "^7.1.4",
    "babel-plugin-transform-class-properties": "^6.24.1",
    "babel-preset-env": "^1.6.1",
    "babel-preset-react": "^6.24.1",
    "css-loader": "^0.28.11",
    "html-webpack-plugin": "^3.2.0",
    "style-loader": "^0.20.3",
    "webpack": "^4.5.0",
    "webpack-cli": "^2.0.14",
    "webpack-dev-server": "^3.1.3"
  }
```
