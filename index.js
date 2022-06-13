function recievesAFuntion(callback){
    return callback();
}
function returnsANamedFuntion() {
    const fn = function(){}
    return fn;
}
function returnsAnAnonymousFuntion(){
    return anonymous();
}
