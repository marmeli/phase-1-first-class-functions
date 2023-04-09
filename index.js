function receivesAFunction(spy){
    spy();
}

function returnsANamedFunction(){
    return function returnsanamedfunction(){};
}

function returnsAnAnonymousFunction(){
    return function (){};
}