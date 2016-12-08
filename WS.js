module.exports = {
    post: function(url,data,tries) {

        var assert = require('./util/assert.js') ;
        var error = require('./util/error.js') ;
        var print = require('./util/print.js') ;
        var ua = require('./MS-XMLHTTP.js') ;

        var maxTries = tries || 10 ;
        while(maxTries-- > 0){
            try {
                ua.open('POST', url, false) ; // sync
                ua.setRequestHeader('User-Agent','jshwinfo') ;
                ua.setRequestHeader("Content-Type", "application/json; charset=UTF-8") ;
                ua.send( data ) ;
                assert(ua.status === 200, 'Wrong response from ws server: ' + ua.status) ;
                res = ua.ResponseText ;
            } catch(ex) {
                if((ex.number & 0xFFFF)===5) { //  Не удается найти указанный ресурс (DNS)
                    continue ;
                  } else {
                    error('Error [' + (ex.number & 0xFFFF) + ']: ' + ex.description) ;
                    break ; // not need
                  }
            }
        }
    }
}
