module.exports = //(function(){ return {
  {
    entry: {
        main:       "./main",
        test:       "./test"
    },
    output: {
        path: './dist',
        filename: "[name].js" // name replace with entry value
        //filename: __dirname + "-[name].js" // name replace with entry value
    }
  }
//}})() ;
