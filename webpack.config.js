var webpack = require('webpack');
var PROD = JSON.parse(process.env.PROD_ENV || '0');

module.exports = {
    entry: {
        app: './src/app.jsx'
    },
    output: {
        filename: './dist/[name].js'
    },
    plugins: PROD ? [
        new webpack.optimize.UglifyJsPlugin({
          compress: { warnings: false }
        })
    ] : [],
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.jsx$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                }
            },
            {
                test: /\.scss$/,
                exclude: /(node_modules|bower_components)/,
                loaders: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    }
}
