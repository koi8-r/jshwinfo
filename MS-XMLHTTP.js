module.exports = (function() {

    var error = require('./util/error.js') ;

    try {
        return new ActiveXObject("Msxml2.XMLHTTP") ;
    } catch(ignored) {}
    try {
        return new ActiveXObject("Msxml2.XMLHTTP.6.0") ;
    } catch(ignored) {}
    try {
        return new ActiveXObject("Msxml2.XMLHTTP.3.0") ;
    } catch(ignored) {}
    try {
        return new ActiveXObject('WinHttp.WinHttpRequest.5.1') ;
    } catch(ignored) {}

    error("Can't create XMLHttpRequest.") ;
})()
