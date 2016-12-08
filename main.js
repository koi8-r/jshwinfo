var print = require('./util/print.js') ;
var assert = require('./util/assert.js') ;
var smbiosData = require('./smbios/WMI-SMBiosData.js') ;
var SMBios = require('./smbios/SMBios.js') ;
var Result = require('./model/SMBios.js') ;
var unpack = require('./smbios/unpack.js') ;
var smbiosDataExample = require('./WMI-SMBiosData-example.js') ;
var BIOS = require('./model/BIOS.js') ;
var System = require('./model/System.js') ;
var Baseboard = require('./model/Baseboard.js') ;
var Processor = require('./model/Processor.js') ;
var Mem = require('./model/Mem.js') ;

//var data = new SMBios( smbiosData() ) ;
var data = new SMBios( smbiosDataExample ) ;
//print(data.asString()) ;

var result = new Result() ;

for(var i = 0 ; i < data.to.length ; i++) {
    var to = data.to[i] ;
    var tbl = unpack(to) ;
    var item ;

    if(tbl != undefined) {
        switch(to.type) {
            case 127:
                print( 'EOT') ; // End of table
            break ;
            case 0:
                var item = new BIOS(tbl) ;
                print( 'BIOS vendor: ' + item.vendor ) ;
                print( 'BIOS ver.: ' + item.version ) ;
                print( 'BIOS release date: ' + item.releaseDate ) ;
                print( 'BIOS system ver.: ' + item.majorVer + '.' + item.minorVer ) ;
                result.bios.push(item) ;
            break ;
            case 2:
                var item = new Baseboard(tbl) ;
                print( 'Baseboard manufacturer: ' +  item.manufacturer) ;
                print( 'Baseboard product: ' +  item.product) ;
                print( 'Baseboard version: ' +  item.version) ;
                print( 'Baseboard serial: ' +  item.serial) ;
                print( 'Baseboard asset tag: ' +  item.assetTag) ;
                result.baseboard.push(item) ;
            break ;
            case 4:
                var item = new Processor(tbl) ;
                print( 'Processor socket: ' +  item.socket) ;
                print( 'Processor type: ' +  item.type + ' [' + item.typeDetail + ']') ;
                print( 'Processor family: ' +  item.family + ' [' + item.familyDetail + ']') ;
                print( 'Processor manufacturer: ' + item.manufacturer) ;
                print( 'Processor version: ' + item.version) ;
                print( 'Processor upgrade: ' + item.upgrade + ' [' + item.upgradeDetail + ']') ;
                result.processor.push(item) ;
            break ;
            case 11:
                assert( tbl.count === to.data.strings.length, 'Count of strings in header and in fact different' ) ;
                for(var i0=0 ; i0<to.data.strings.length ; i0++) // don't use i, js problem
                    print( 'OEM string: ' + to.data.strings[i0]) ;
            break ;
            case 17:
                var item = new Mem(tbl) ;
                print( 'Memory dev size: ' + item.size + item.sizeUnit + ' [' + item.sizeDetail + ']') ;
                print( 'Memory dev bank: ' + item.bank ) ;
                print( 'Memory dev device locator: ' + item.locator ) ;
                print( 'Memory dev type: ' + item.type + ' [' + item.typeDetail + ']') ;
                print( 'Memory dev manufacturer: ' + item.manufacturer ) ;
                print( 'Memory dev serial: ' + item.serial ) ;
                print( 'Memory dev asset tag: ' + item.assetTag ) ;
                print( 'Memory dev part number: ' + item.partNum ) ;
                print( 'Memory dev extended size: ' + item.extSize ) ;
                result.memory.push(item) ;
            break ;
            default:
                print('Skip type ' + to.type) ;
        }
    } else
        print('Not implemented type ' + to.type) ;

    print('---') ;
}

print('Process: ' + data.to.length + ' tables.') ;

if(typeof JSON === 'object') {
    print('Result json:') ;
    print( JSON.stringify(result,'',4) ) ;
}
