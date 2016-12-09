module.exports = (function() {
    // https://github.com/webpack/docs/wiki/shimming-modules
    // npm install -g exports-loader
    return (typeof JSON === 'undefined')
        ? require('exports?JSON!./json2-031b1d9')
        : JSON
    ;
}())
