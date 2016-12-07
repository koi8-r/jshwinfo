module.exports = function(cond,msg) {
    var error = require('./error.js') ;
    if(!cond)
        error(msg || 'Asseration failed') ;
} ;
