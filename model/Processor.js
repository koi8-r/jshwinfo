/**
    Wrap smbios unpack frunction's result,
    if @unpacked == undefined return null initialized object.

    @mem - Dynamic object from smbios unpack frunction.
 */
module.exports = function(unpacked) {

    var error = require('../util/error.js') ;

    this.typeDetail = function(){
        return require('./ProcessorType.js')[this.type] ;
    } ;

    this.familyDetail = function(){
        return require('./ProcessorFamily.js')[this.family] ;
    } ;


    if(unpacked) for(var key in unpacked)
        this[key] = unpacked[key] ;
} ;
