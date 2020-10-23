const HtmlWebPackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

module.exports = {
    entry: ['babel-polyfill', './src/assets/js/app.js'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'assets/js/bundle.js'
    },
    devServer: {
        contentBase:'./dist'
    },
    plugins: [
        new HtmlWebPackPlugin({
            filename:'index.html',
            template: './src/index.pug'
        }),
        new ExtractTextPlugin({
            filename: '/assets/css/app.css'
        })
    ],
    module: {
        rules: [
            { 
                test: /\.pug$/,
                use: ['pug-loader']
            },
            { 
                test: /\.js$/, 
                exclude: /node_modules/,
                loader: "babel-loader" 
            },
            {
                test: /\.scss$/, 
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use : ['css-loader','sass-loader']
                })
            }
        ]
    }
}