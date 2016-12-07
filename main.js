var print = require('./util/print.js') ;
var assert = require('./util/assert.js') ;
var smbiosData = require('./smbios/WMI-SMBiosData.js') ;
var SMBios = require('./smbios/SMBios.js') ;
var unpack = require('./smbios/unpack.js') ;
var smbiosDataExample = require('./WMI-SMBiosData-example.js') ;
var BIOS = require('./model/BIOS.js') ;
var Mem = require('./model/Mem.js') ;

//var data = new SMBios( smbiosData() ) ;
var data = new SMBios( smbiosDataExample ) ;
//print(data.asString()) ;

for(var i = 0 ; i < data.to.length ; i++) {
    var to = data.to[i] ;
    var tbl = unpack(to) ;

    if(tbl != undefined) {
        switch(to.type) {
            case 0:
                var bios = new BIOS(tbl) ;
                print( 'BIOS vendor: ' + bios.vendor ) ;
                print( 'BIOS ver.: ' + bios.version ) ;
                print( 'BIOS release date: ' + bios.releaseDate ) ;
                print( 'BIOS system ver.: ' + bios.majorVer + '.' + bios.minorVer ) ;
            break ;
            case 17:
                var mem = new Mem(tbl) ;
                print( 'Memory dev size: ' + mem.size + mem.sizeUnit() + ' [' + mem.sizeDetail() + ']') ;
                print( 'Memory dev bank: ' + mem.bank ) ;
                print( 'Memory dev device locator: ' + mem.locator ) ;
                print( 'Memory dev type: ' + mem.type + ' [' + mem.typeDetail() + ']') ;
                print( 'Memory dev manufacturer: ' + mem.manufacturer ) ;
                print( 'Memory dev serial: ' + mem.serial ) ;
                print( 'Memory dev asset tag: ' + mem.assetTag ) ;
                print( 'Memory dev part number: ' + mem.partNum ) ;
                print( 'Memory dev extended size: ' + mem.extSize ) ;
            break ;
            default:
                print('Skip type ' + to.type) ;
        }
    } else
        print('Not implemented type ' + to.type) ;

    print('---') ;
}

print('Process: ' + data.to.length + ' tables.') ;
