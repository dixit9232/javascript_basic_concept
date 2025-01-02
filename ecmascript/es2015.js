const name = "Dixit";
const age = 24;

// traditional Way
const obj1 = { name: name, age: age };
// console.log(obj1);
//  latest Way
const obj2 = { name, age };
// console.log(obj2);

//--------------------------------------------------------------------------------------------------

//  Destructuring array
const num = [10, 20, 30];
// const first = num[0];
const [first, second, third] = num;
// console.log(first,second,third);

//--------------------------------------------------------------------------------------------------

// swap two value
let a = 10;
let b = 20;
[a, b] = [b, a];
// console.log('a='+a, 'b='+b);

//--------------------------------------------------------------------------------------------------

// destructure object
const user = { myName: "Dixit", myAge: 20 };
// const myName = user.myName;
// console.log(myName);
const { myName, myAge } = user;
const { myName: fullName, myAge: curAge } = user;
// console.log(myName, myAge);
// console.log(fullName, curAge);

//--------------------------------------------------------------------------------------------------

// spread operator
const fruits = ["mango", "apple", "banana", "pineapple"];
const newFruits = ["guava", ...fruits, "guava"];
// console.log(newFruits);

//--------------------------------------------------------------------------------------------------

// merge two array
const num1 = [1, 2, 3];
const num2 = [4, 5, 6];
const num3 = [...num1, ...num2];
// console.log(num);

//--------------------------------------------------------------------------------------------------

// add element to array
const num4 = [1, 2, 3];
num4.push(...[4, 5, 6, 7, 8, 9]);
// console.log(num4);

//--------------------------------------------------------------------------------------------------

const country = "INDIA";
// console.log(country.split(''));
const countryArray = [...country];
// console.log(countryArray);

//--------------------------------------------------------------------------------------------------


// rest parameter
const sum = (...numbers) => {

    return numbers.reduce((acc, curElem) => acc = acc + curElem, 0);
    
}

console.log(sum(1,2,3,4,5,6,7,8,9));
