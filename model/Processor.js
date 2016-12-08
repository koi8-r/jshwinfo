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

        this.typeDetail = require('./ProcessorType.js')[this.type] ;
        this.familyDetail = require('./ProcessorFamily.js')[this.family] ;
        this.upgradeDetail = require('./ProcessorUpgrade.js')[this.upgrade] ;
    }
} ;
