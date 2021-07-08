


var globalNumber = 10;

var globalFunction = function () {
    var globalNumber = 5;
    return globalNumber
}

console.log( globalFunction() );

console.log(globalNumber);