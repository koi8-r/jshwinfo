/**
    Wrap smbios unpack frunction's result,
    if @unpacked == undefined return null initialized object.

    @mem - Dynamic object from smbios unpack frunction.
 */
module.exports = function(unpacked) {

    var error = require('../util/error.js') ;

    if(unpacked) {
        for(var key in unpacked)
            this[key] = unpacked[key] ;

        this.typeDetail = require('./MemoryType.js')[this.type] ;

        switch(this.size) {
          case 0x0:
              this.sizeDetail = 'Not installed' ;
          break ;
          case 0xFFFF:
              this.sizeDetail = 'Unknown' ;
          break ;
          case 0x7FFF:
              this.sizeDetail = 'Extended size' ;
          break ;
          default:
            this.sizeDetail = (this.size) ? this.size + '' : undefined ; // convert to string
        }

        // Most-significant bit (bit 31) must be 0
        // (this.extSize & 0x80000000) == 0
        this.extSizeUnit = 'MB' ; // always MB

        // Most-significant bit (bit 15): 0 for megabytes, 1 for kilobytes
        this.sizeUnit = ( (this.size & parseInt('10000000',2)) == 0 ) ? 'MB' : 'KB' ;
    } ;

} ;
