module.exports = (function(){

    var error = require('./error.js') ;

    if( typeof console === 'object' )
        return function(msg) {
            console.info(msg) ;
        }
    else if( typeof WScript === 'object' )
        return function(msg) {
            WScript.echo(msg) ;
        }
    else
        error("Can't initialize print function") ;
})() ;
