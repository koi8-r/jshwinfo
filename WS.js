module.exports = {
    post: function(url,data,tries) {

        var assert = require('./util/assert.js') ;
        var error = require('./util/error.js') ;
        var print = require('./util/print.js') ;

        try {
            var ua = require('./MS-XMLHTTP.js') ;
        } catch (ex) {
            print('Skip POST data') ;
            return ;
        }

        var maxTries = tries || 10 ;
        while(true){
            try {
                ua.open('POST', url, false) ; // sync
                ua.setRequestHeader('User-Agent','jshwinfo') ;
                ua.setRequestHeader("Content-Type", "application/json; charset=UTF-8") ;
                ua.send( data ) ;
                assert(ua.status === 200, 'Wrong response from ws server: ' + ua.status) ;
                res = ua.ResponseText ;
                print(res) ;
                break ;
            } catch(ex) {
                if(  --maxTries > 0 && (ex.number & 0xFFFF)===5  )
                    continue ;
                else
                    error('Error [' + (ex.number & 0xFFFF) + ']: ' + ex.description) ;
            }
        }
    }
}
