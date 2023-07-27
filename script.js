// Reference Error
// console.log(username);
// ReferenceError: username is not defined

// Syntax Error
// var a "this is an invalid assignment operator";
// SyntaxError: UnexpectedString

// TypeError
// "hello".pop()
// TypeError: "hello".pop is not a function

// RangeError
console.log((10).toString(2));
console.log((10).toString(8));
console.log((10).toString(100));
// RangeError: toString() radix argument must be between 2 and 36