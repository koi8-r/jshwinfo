module.exports = function(data) {

    var print = require('../util/print.js') ;
    var assert = require('../util/assert.js') ;
    var packi = require('../util/packi.js') ;
    var TO = require('../model/TO.js') ;

    this.data = data ;

    // TODO: toString prototype
    this.asString = function() {
        return '[ ' + this.data.join(', ') + ' ]' ;
    }

    /**
        TODO
     */
    this.to = (function parse(data, list){
      var l ;

      assert(null == undefined && undefined == undefined) ;
      if(list == undefined)
          l = new Array() ;
      else
          l = list ;

      if(data.length == 0) return l ;

      assert(data.length >= 4, 'Table length to small') ;

      var to = new TO() ;
      var fmtdLen  = data[1] ; // length of formated data
      to.type = data[0] ;
      to.handle = packi([ data[2],data[3] ]) ;

      to.data.formated = data.slice(0,fmtdLen) ;

      assert(to.data.formated.length === fmtdLen, "Length of formated data not equals to header's length") ;

      // populate to.data.strings
      // FIXME: Check for format errors
      var s = "" ;
      for(var i = fmtdLen ; i < data.length ; i++) {
          if( 0 === data[i] ) {                          // end of string
              to.data.strings.push(s) ;
              s = "" ;

              // FIXME: var pre = ;
              if( 0 === data[i+1] ) {                    // end of table
                  l.push(to) ;
                  break ;
              } else
                  continue ;
          } else
              s += String.fromCharCode(data[i]) ;
      }

      // FIXME: i + 2, check len
      return parse( data.slice(i += 2), l ) ; // recursion

    }(this.data)) ;
} ;
