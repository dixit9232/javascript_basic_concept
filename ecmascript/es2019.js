// flat method in array
const number = [1, 2, [[3, [4]], [5]], 6];
//use infinity when you don't know how many nested array other wise you can enter number of nested array
const newArray = number.flat(Infinity);
// console.log(newArray);

// flat map method in array

const stringArray = [
  "the quick",
  "brown fox",
  "jumps over",
  "the lazy dog",
  "javascript is awesome",
];
// const newStringArray = stringArray.map((string) => string.split(" "));
// console.log(newStringArray);
// the output is [['the', 'quick'],['brown', 'fox'],['jumps', 'over'],['the', 'lazy', 'dog'],['javascript', 'is', 'awesome']];

const newStringArray = stringArray.flatMap((string) => string.split(" "));
// console.log(newStringArray);
// output is ['the', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog', 'javascript', 'is', 'awesome']


// object.fromEntries Method

const obj = {
    name: "John",
    age: 30,
    occupation: "Software Engineer",
};

const obj1 = Object.entries(obj);
console.log(obj1);
// output is [["name", "John"],["age", 30],["occupation", "Software Engineer"]]

// fromEntries create a object from array of key value pairs
const obj2 = Object.fromEntries(obj1);
console.log(obj2);
// output is {name: "John", age: 30, occupation: "Software Engineer"}

// symbol

const symbol = Symbol('the quick brown fox jump over the lazy dog');
console.log(symbol.description);
