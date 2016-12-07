var print = require('./util/print.js') ;
var assert = require('./util/assert.js') ;
var smbiosData = require('./smbios/WMI-SMBiosData.js') ;
var SMBios = require('./smbios/SMBios.js') ;
var unpack = require('./smbios/unpack.js') ;
var smbiosDataExample = require('./WMI-SMBiosData-example.js') ;
var Mem = require('./model/Mem.js') ;

//var data = new SMBios( smbiosData() ) ;
var data = new SMBios( smbiosDataExample ) ;
//print(data.asString()) ;

for(var i = 0 ; i < data.to.length ; i++) {
    var t = data.to[i] ;
    var mem = unpack(t) ;

    if(mem != undefined) {
      var m = new Mem(mem) ;
      print( 'Size: ' + m.size + m.sizeUnit() + ' [' + m.sizeDetail() + ']') ;
      print( 'Bank: ' + m.bank ) ;
      print( 'Type: ' + m.type + ' [' + m.typeDetail() + ']') ;
      print( 'Manufacturer: ' + m.manufacturer ) ;
      print( 'Serial: ' + m.serial ) ;
      print( 'Asset tag: ' + m.assetTag ) ;
      print( 'Part number: ' + m.partNum ) ;
      print( 'Extended size: ' + m.extSize ) ;
    } else
      print('Skip type ' + t.type) ;

    print('---') ;
}

print('Process: ' + data.to.length + ' tables.') ;
