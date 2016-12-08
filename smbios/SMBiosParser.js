module.exports = function(smbiosData, debug) {
    var print = require('../util/print.js') ;
    var assert = require('../util/assert.js') ;

    var SMBios = require('./SMBios.js') ;
    var unpack = require('./unpack.js') ;

    var BIOS = require('../model/BIOS.js') ;
    var System = require('../model/System.js') ;
    var Baseboard = require('../model/Baseboard.js') ;
    var Processor = require('../model/Processor.js') ;
    var Mem = require('../model/Mem.js') ;
    var Result = require('../model/SMBios.js') ;

    if(! debug) print = function(){} ;

    var data = new SMBios( smbiosData ) ;

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
                    result.bios.push( new BIOS(tbl) ) ;
                break ;
                case 2:
                    result.baseboard.push( new Baseboard(tbl) ) ;
                break ;
                case 4:
                    result.processor.push( new Processor(tbl) ) ;
                break ;
                /*
                case 11:
                    assert( tbl.count === to.data.strings.length, 'Count of strings in header and in fact different' ) ;
                    for(var i0=0 ; i0<to.data.strings.length ; i0++) // don't use i, js problem
                        print( 'OEM string: ' + to.data.strings[i0]) ;
                break ;
                */
                case 17:
                    result.memory.push( new Mem(tbl) ) ;
                break ;
                default:
                    print('Skip type ' + to.type) ;
            }
        } else
            print('Not implemented type ' + to.type) ;
    }

    print('Process: ' + data.to.length + ' tables.') ;

    return result ;
}
