function receivesAFunction(callBack){
    callBack()
}

function returnsANamedFunction(){
    function namedFunction() {}
    return namedFunction;
}

function returnsAnAnonymousFunction(){
    return () => {}
}