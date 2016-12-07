/**
    Query smbios data tables through windows WMI.
    @return - array of int with smbios data tables
 */
module.exports = function() {

    var assert = require('../util/assert.js') ;

    assert(
        typeof Enumerator === 'function' &&
        typeof ActiveXObject === 'function' &&
        typeof GetObject  === 'function'
        ,"Error: need's Enumerator,ActiveXObject,etc functions from wsh cscript"
    ) ;

    // new ActiveXObject
    var wmio = GetObject("winmgmts://./root/wmi:MSSmBios_RawSMBiosTables.InstanceName=\"SMBiosData\"") ;

    assert( typeof wmio === 'object', "Can't get SMBios data tables through WMI" ) ;

    var result = [] ;

    for(var e = new Enumerator(wmio.SMBiosData.toArray()) ; !e.atEnd() ; e.moveNext()) {
        result.push(e.item()) ;
    }

    return result ;
} ;
