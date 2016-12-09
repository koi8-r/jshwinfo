var webpack = require('webpack') ;

module.exports = {
    entry: {
        main:       "./main",
        'main.min': "./main",
        test:       "./test"
    },
    output: {
        path: './dist',
        filename: "[name].js" // name replace with entry value
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            include: /\.min\.js$/,
            compress: {
                warnings: false
            }
        })
    ]
} ;
