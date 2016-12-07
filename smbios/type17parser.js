// Memory Device (Type 17) parser example
module.exports = function(d) {
    // assert d.type == 17
    // assert d.length >= ?
    var sizeA = [], extSizeA = [] ;
    var type = undefined ;
    var bankStrNum, manufacturerStrNum,
        serialStrNum, assetTagStrNum, partStrNum ;

    for(var i=0 ; i<d.data.formated.length ; i++) {
        var v = d.data.formated[i] ;
        switch(i) { // offset
            // Size (WORD)
            case 0x0C: case 0x0D:
                sizeA.push(v) ;
            break ;
            // Extended size (DWORD)
            case 0x1C: case 0x1D: case 0x1E: case 0x1F:
                extSizeA.push(v) ;
            break ;
            // Memory type
            case 0x12:
                type = v ;
            break ;
            // Bank locator string number
            case 0x11:
                bankStrNum = v ;
            break ;
            // Manufacturer string number
            case 0x17:
                manufacturerStrNum = v ;
            break ;
            // Serial number string number
            case 0x18:
                serialStrNum = v ;
            break ;
            // Asset tag string number
            case 0x19:
                assetTagStrNum = v ;
            break ;
            // Part number string number
            case 0x1A:
                partStrNum = v ;
            break ;
        }
    }

    // Size
    // 0     - not installed
    // FFFFh - unknown
    // 7FFFh - extended size
    var    size = (sizeA == undefined)?undefined:packi(sizeA),
        extSize = (extSizeA == undefined)?undefined:packi(extSizeA) ;

    // Most-significant bit (bit 15)
    // 0 megabytes
    // 1 kilobytes
    var unit = ( (size & parseInt('10000000',2)) == 0 )?'MB':'KB' ;

    //var mem = new Mem() ;
    var mem = {} ;
    mem.type = type || null ;
    mem.size = size || null ;
    mem.sizeUnit = unit || null ;
    // FIXME: not implemented
    mem.extSize = extSize || null ;
    mem.bank = (bankStrNum)?d.data.strings[bankStrNum-1]:null ; // index starts from 1
    mem.manufacturer = (manufacturerStrNum)?d.data.strings[manufacturerStrNum-1]:null ;
    mem.serial = (serialStrNum)?d.data.strings[serialStrNum-1]:null ;
    mem.assetTag = (assetTagStrNum)?d.data.strings[assetTagStrNum-1]:null ;
    // FIXME:
    mem.part = (partStrNum)?d.data.strings[partStrNum-1]:null ;

    return mem ;
} ;
