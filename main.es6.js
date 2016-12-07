var print = require('./util/print.js') ;
var SMBios = require('./smbios/SMBios.js') ;
var unpack = require('./smbios/unpack.js') ;
var smbiosDataExample = require('./WMI-SMBiosData-example.js') ;

var data = new SMBios( smbiosDataExample ) ;

for(var t of data.to) {
    var mem = unpack(t) ;
    if(mem != undefined) {
      print( 'Size: ' + mem.size ) ;
      print( 'Bank: ' + mem.bank ) ;
      print( 'Type: ' + mem.type ) ;
      print( 'Manufacturer: ' + mem.manufacturer ) ;
      print( 'Serial: ' + mem.serial ) ;
      print( 'Asset tag: ' + mem.assetTag ) ;
      print( 'Part number: ' + mem.partNum ) ;
      print( 'Extended size: ' + mem.extSize ) ;
    } else
      print('Skip type ' + t.type) ;

    print('---') ;
}

print('Process: ' + data.to.length + ' tables.') ;
