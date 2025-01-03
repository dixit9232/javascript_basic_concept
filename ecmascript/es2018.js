// object with spread operator
const student = {
  name: "dixit",
  age: 20,
  isStudent: false,
};

// destruct object using spread operator

const { age, ...other } = student;
console.log(age); // 20
console.log(other); // { name: 'dixit', isStudent: false }

// merge two object using spread operator
const obj1 = { a: 1, b: 2, c: 3 };
const obj2 = { c: 4, d: 5, e: 6 };
/// NOTE : when an object has same key in both object then the value of the last object will be taken

const obj3 = { ...obj1, ...obj2 };
const obj4 = { ...obj2, ...obj1 };

console.log(obj3);
console.log(obj4);
