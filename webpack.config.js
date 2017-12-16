module.exports = {
    entry: {
        app: './src/app.jsx'
    },
    output: {
        filename: './dist/[name].js'
    },
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
