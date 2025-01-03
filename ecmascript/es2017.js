// in ecmascript 2017 we have a String Padding
// Syntax
// pad start add a space or given string at the start of the string
// string.padStart(number of empty space, add a symbol or other string you want to add )
// pad end add a space or given string at the end of the string
// string.padEnd(number of empty space, add a symbol or other string you want to add )

// EX.
let str = "World";
console.log(str.padStart(11, "Hello ")); // out put "Hello World"

let str2 = "Hello";
console.log(str2.padEnd(11, " World")); // out put "Hello World "