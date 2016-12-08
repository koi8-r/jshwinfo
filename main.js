var print = require('./util/print.js') ;

//var data = new SMBios( require('./smbios/WMI-SMBiosData.js')() ) ; // WMI query
var data = require('./smbios/SMBiosParser.js')( require('./WMI-SMBiosData-example.js'), false ) ;

if(typeof JSON === 'object') {
    print( JSON.stringify(data,'',4) ) ;
} else {
    for(var i = 0 ; i < data.bios.length ; i++) {
        var item = data.bios[i] ;
        print( 'BIOS vendor: ' + item.vendor ) ;
        print( 'BIOS ver.: ' + item.version ) ;
        print( 'BIOS release date: ' + item.releaseDate ) ;
        print( 'BIOS system ver.: ' + item.majorVer + '.' + item.minorVer ) ;
     }
     for(var i = 0 ; i < data.baseboard.length ; i++) {
        var item = data.baseboard[i] ;
        print( 'Baseboard manufacturer: ' +  item.manufacturer) ;
        print( 'Baseboard product: ' +  item.product) ;
        print( 'Baseboard version: ' +  item.version) ;
        print( 'Baseboard serial: ' +  item.serial) ;
        print( 'Baseboard asset tag: ' +  item.assetTag) ;
     }
     for(var i = 0 ; i < data.processor.length ; i++) {
        var item = data.processor[i] ;
        print( 'Processor socket: ' +  item.socket) ;
        print( 'Processor type: ' +  item.type + ' [' + item.typeDetail + ']') ;
        print( 'Processor family: ' +  item.family + ' [' + item.familyDetail + ']') ;
        print( 'Processor manufacturer: ' + item.manufacturer) ;
        print( 'Processor version: ' + item.version) ;
        print( 'Processor upgrade: ' + item.upgrade + ' [' + item.upgradeDetail + ']') ;
     }
     for(var i = 0 ; i < data.memory.length ; i++) {
        var item = data.memory[i] ;
        print( 'Memory dev size: ' + item.size + item.sizeUnit + ' [' + item.sizeDetail + ']') ;
        print( 'Memory dev bank: ' + item.bank ) ;
        print( 'Memory dev device locator: ' + item.locator ) ;
        print( 'Memory dev type: ' + item.type + ' [' + item.typeDetail + ']') ;
        print( 'Memory dev manufacturer: ' + item.manufacturer ) ;
        print( 'Memory dev serial: ' + item.serial ) ;
        print( 'Memory dev asset tag: ' + item.assetTag ) ;
        print( 'Memory dev part number: ' + item.partNum ) ;
        print( 'Memory dev extended size: ' + item.extSize ) ;
     }

}

var url = require('./ws-config.js').url ;
require('./WS.js').post( url, data, 1 ) ;
