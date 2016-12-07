module.exports = {
    // Memory device (Type 17)
    17: [
        { name: 'size',         type: 'word',   offset: 0x0C },
        { name: 'bank',         type: 'string', offset: 0x11 },
        { name: 'type',         type: 'byte',   offset: 0x12 },
        { name: 'manufacturer', type: 'string', offset: 0x17 },
        { name: 'serial',       type: 'string', offset: 0x18 },
        { name: 'assetTag',     type: 'string', offset: 0x19 },
        { name: 'partNum',      type: 'string', offset: 0x1A },
        { name: 'extSize',      type: 'dword',  offset: 0x1C }
    ]
} ;
