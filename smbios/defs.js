module.exports = {
    // EOT
    127: [],
    // BIOS
    0: [
        { name: 'vendor',       type: 'string', offset: 0x04 },
        { name: 'version',      type: 'string', offset: 0x05 },
        // mm/dd/yyyy, mm/dd/yy for 19xx year only
        { name: 'releaseDate',  type: 'string', offset: 0x08 },
        { name: 'majorVer',     type: 'byte',   offset: 0x14 },
        { name: 'minorVer',     type: 'byte',   offset: 0x15 }
    ],
    // System
    1: [
        // 2.0+ above
        { name: 'manufacturer', type: 'string', offset: 0x04 },
        { name: 'product',      type: 'string', offset: 0x05 },
        { name: 'version',      type: 'string', offset: 0x06 },
        { name: 'serial',       type: 'string', offset: 0x07 }
    ],
    // Baseboard
    2: [
        { name: 'manufacturer', type: 'string', offset: 0x04 },
        { name: 'product',      type: 'string', offset: 0x05 },
        { name: 'version',      type: 'string', offset: 0x06 },
        { name: 'serial',       type: 'string', offset: 0x07 },
        { name: 'assetTag',     type: 'string', offset: 0x08 }
    ],
    // Processor
    4: [
        // 2.0+ above
        { name: 'socket',       type: 'string', offset: 0x04 },
        { name: 'type',         type: 'byte',   offset: 0x05 },
        { name: 'family',       type: 'byte',   offset: 0x06 },
        { name: 'manufacturer', type: 'string', offset: 0x07 }
    ],
    // Port connector
    8: [
        { name: 'intRefDes',    type: 'string', offset: 0x04 },
        { name: 'intType',      type: 'byte',   offset: 0x05 },
        { name: 'extRefDes',    type: 'string', offset: 0x06 },
        { name: 'intType',      type: 'byte',   offset: 0x07 },
        { name: 'portType',     type: 'byte',   offset: 0x08 }
    ],
    // OEM Strings
    11: [
        { name: 'count',        type: 'byte',   offset: 0x04 },
    ],
    // Memory device (Type 17)
    17: [
        //2.1+ above
        { name: 'size',         type: 'word',   offset: 0x0C },
        { name: 'locator',      type: 'string', offset: 0x10 },
        { name: 'bank',         type: 'string', offset: 0x11 },
        { name: 'type',         type: 'byte',   offset: 0x12 },
        //2.3+ above
        { name: 'manufacturer', type: 'string', offset: 0x17 },
        { name: 'serial',       type: 'string', offset: 0x18 },
        { name: 'assetTag',     type: 'string', offset: 0x19 },
        { name: 'partNum',      type: 'string', offset: 0x1A },
        //2.7+ above
        { name: 'extSize',      type: 'dword',  offset: 0x1C }
    ]
} ;
