module.exports = function Mem() {

    var types = require('./MemoryType.js') ;

    this.type = null ;
    /* TODO:
        0     - not installed
        FFFFh - unknown
        7FFFh - extended size
    */
    this.size = null ;
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
    this.part = null ;
} ;
