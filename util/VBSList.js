module.exports = function( vbList ) {

    if( vbList == undefined )
        return undefined ;

    var result = [] ;
    for(var e = new Enumerator(vbList) ; !e.atEnd() ; e.moveNext())
        result.push(e.item()) ;

    return result ;
}
