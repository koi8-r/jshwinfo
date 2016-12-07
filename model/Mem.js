/**
    Wrap smbios unpack frunction's result,
    if @unpacked == undefined return null initialized object.

    @mem - Dynamic object from smbios unpack frunction.
 */
module.exports = function Mem(unpacked) {

    var error = require('../util/error.js') ;

    this.type = null ;
    this.typeDetail = function(){
        return require('./MemoryType.js')[this.type] ;
    },

    /*  0     - not installed
        FFFFh - unknown
        7FFFh - extended size
    */
    this.size = null ;
    this.sizeDetail = function(){
        switch(this.size) {
          case 0x0:
              return 'Not installed' ;
          break ;
          case 0xFFFF:
              return 'Unknown' ;
          break ;
          case 0x7FFF:
              return 'Extended size' ;
          break ;
          default:
            return size ;
        }
    },
    this.sizeUnit = function() {
        // Most-significant bit (bit 15)
        // 0 megabytes
        // 1 kilobytes
        return ( (this.size & parseInt('10000000',2)) == 0 ) ? 'MB' : 'KB' ;
    } ;

    this.extSize = null ;


    this.bank = null ;
    this.manufacturer = null ;
    this.serial = null ;
    this.assetTag = null ;
    this.partNum = null ;

    if(unpacked) for(var key in unpacked) {
        switch(key) {
            case 'size':
              this[key] = unpacked[key] ;
            break ;
            case 'bank':
              this[key] = unpacked[key] ;
            break ;
            case 'type':
              this[key] = unpacked[key] ;
            break ;
            case 'manufacturer':
              this[key] = unpacked[key] ;
            break ;
            case 'serial':
              this[key] = unpacked[key] ;
            break ;
            case 'assetTag':
              this[key] = unpacked[key] ;
            break ;
            case 'partNum':
              this[key] = unpacked[key] ;
            break ;
            case 'extSize':
              this[key] = unpacked[key] ;
            break ;
            default:
              error('Unknown field: ' + unpacked[key]) ;
        }
    }
} ;
