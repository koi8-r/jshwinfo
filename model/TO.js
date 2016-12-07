module.exports = (function() {

    var result = function() {
      this.type = null ;
      this.handle = null ;
      this.data = {
          formated: null,
          strings: []
        } ;

      this.asString = function() {
          return
              'Type: ' + this.type
              'Type: ' + this.type + ', ' +
              'formated length: ' + this.data.formated.length + ', '
              'strings count: ' + this.data.strings.length
          ;
      }
    }

    /*
    result.prototype.toString = function() {
        return
            'Type: '// + this.type
            //'Type: ' + this.type + ', ' +
            //'formated length: ' + this.data.formated.length + ', '
            //'strings count: ' + this.data.strings.length
        ;
    }
    */

    return result ;
})() ;
