// at method

const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

// in at method positive value of index is start from 0 like 1 is on 0 index
// and negative value of index is start from end of array like -1 is last index of array
const num = number.at(5);
console.log(num);

// object.hasOwn() method
const person = {
  name: "John Doe",
  age: 30,
  occupation: "Software Engineer",
};

console.log(person.hasOwnProperty("age"));
///  to check a object which is create using Object.create(null)
console.log(Object.hasOwn(person, "age"));
