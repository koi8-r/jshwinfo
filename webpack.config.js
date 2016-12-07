module.exports = {
    entry: {
        main:       "./main",
        'main.es6': "./main.es6"
    },
    output: {
        path: './dist',
        filename: "[name].js" // name replace with entry value
    },
    module: {
        // npm install --save-dev babel-loader babel-core babel-preset-latest babel-polyfill
        // Without config: require("babel!./Util.js") or require("babel!./Util.js").default
        loaders: [
            {
                test: /\.es6\.js$/,
                loader: "babel-loader"
            }
        ]
    }
} ;
