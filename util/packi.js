/**
    Convert array of bytes to integer,long, etc

    @b - array of bytes
    @return - converted value
 */
module.exports = function(b) {
    var value = 0 ;
    for ( var i = b.length-1; i >= 0; i-- ) {
        //assert value << 8 == value * 256
        value = (value*256) + b[i] ;
    }

    return value ;
} ;
