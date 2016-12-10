var webpack = require('webpack') ;

module.exports = {
    entry: {
        main:       "./main",
        'main.min': "./main",
        test:       "./test",
        'test.es6': "./test.es6"
    },
    output: {
        path: './dist',
        filename: "[name].js" // name replace with entry value
    },
    plugins: [
        new webpack.DefinePlugin({
            _WinOS: JSON.stringify(process.env.OS, undefined, 4)
        }),
        new webpack.optimize.UglifyJsPlugin({
            include: /\.min\.js$/,
            compress: {
                warnings: false
            }
        })
    ],
    module: {
        // Without config: require("babel!./Util.js") or require("babel!./Util.js").default
        loaders: [
            {
                test: /\.es6\.js$/,
                loader: "babel-loader",
                exclude: /node_modules/,
                query: {
                    presets: [ 'latest' ] // no need .babelrc
                }
            }
        ]
    }
} ;
