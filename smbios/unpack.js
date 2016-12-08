module.exports =
/**
    Unpacks object by defination

    @to - object for unpack
    @defs - object structure definations
    @return - unpacked object
*/
// TODO: check smbios version (memory dev: not all props by version)
function(to) {

    var print = require('../util/print.js') ;
    var assert = require('../util/assert.js') ;
    var error = require('../util/error.js') ;
    var packi = require('../util/packi.js') ;
    var decl = (require('./defs.js'))[to.type] ;

    //TODO: not inplemented all tables
    //assert(decl != undefined, 'Type not found in smbios table defs') ;
    if(decl == undefined) return undefined ;

    var result = {} ;
    for(var i = 0 ; i < decl.length ; i++) {
        var o = decl[i] ;
        switch(o.type) {
            case 'byte' :
                result[o.name] = to.data.formated[o.offset] ;
            break ;
            case 'word' :
                result[o.name] = packi( to.data.formated.slice(o.offset, o.offset+2) ) ;
            break ;
            case 'dword' :
                result[o.name] = packi( to.data.formated.slice(o.offset, o.offset+4) ) ;
            break ;
            case 'qword' :
                result[o.name] = packi( to.data.formated.slice(o.offset, o.offset+8) ) ;
            break ;
            case 'string' :
                var f = to.data.formated[o.offset] ;
                 // Indexes starts from 1
                var s = to.data.strings[ f-1 ].replace(/^\s+|\s+$/g, '') ;
                result[o.name] = ( s.length > 0 ) ? s : null ;
            break ;
            default: error('Unknown type: ' + o.type) ;
        }
    }
    return result ;
} ;
