// replace all
const str = "Hi, world. Hi, dixit";
const newStr = str.replaceAll("Hi", "Hello");
console.log(newStr);


// replace all multi space with single space
const multiSpaceStr = "Hi,   world. Hi,   dixit";
const newMultiSpaceStr = multiSpaceStr.replaceAll(/\s+/g, ' ');
console.log(newMultiSpaceStr);