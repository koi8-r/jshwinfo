module.exports = {
    entry: {
        main:       "./main",
        test:       "./test"
    },
    output: {
        path: './dist',
        filename: "[name].js" // name replace with entry value
    }
} ;
