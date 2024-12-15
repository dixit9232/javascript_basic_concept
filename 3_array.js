/**
 // Initialize an array of fruits
const fruits = ["apple", "banana", "cherry", "date", "elderberry", "apple", "apple", "apple"];

// For of loop
// This loop iterates over each item in the fruits array and logs it to the console.
console.log("For of Loop");
for (const item of fruits) {
  console.log(item);
}

// For in loop
// This loop iterates over the indices of the fruits array and logs the index to the console.
console.log("\n\nFor In Loop");
for (const index in fruits) {
  console.log(index);
}

// For each loop
// This method executes a provided function once for each array element.
// It logs each fruit along with its index.
console.log("\n\nFor Each Loop");
fruits.forEach((element, index) => {
  console.log(`${element} ${index}`);
});

// Map method
// This method creates a new array populated with the results of calling a provided function on every element in the calling array.
// It returns an array of strings that include each fruit and its index.
console.log("\n\nmap method");
const newArray = fruits.map((element, index) => {
  return (`${element} ${index}`);
});
console.log(newArray);

// Push method
// Adds a new element "fig" to the end of the fruits array and logs the updated array.
fruits.push("fig");
console.log(fruits);

// Pop method
// Removes the last element from the fruits array and logs the updated array.
fruits.pop();
console.log(fruits);

// Unshift method
// Adds a new element "Fig" to the beginning of the fruits array and logs the updated array.
fruits.unshift("Fig");
console.log(fruits);

// Shift method
// Removes the first element from the fruits array and logs the updated array.
fruits.shift();
console.log(fruits);

// Splice method
// Adds a new element "Fig" at index 1 of the fruits array without removing any elements, and logs the updated array.
fruits.splice(1, 0, "Fig");
console.log(fruits);

// Index of method
// Returns the index of the first occurrence of the specified value in the array, or -1 if not found.
const result = fruits.indexOf("banana");
console.log(result);

// Last index of method
// Returns the index of the last occurrence of the specified value in the array, or -1 if not found.
// Adds another "banana" to demonstrate lastIndexOf.
fruits.push("banana");
const result2 = fruits.lastIndexOf("banana");
console.log(result2);

// Includes method
// Returns true if the array includes the specified value, and false otherwise.
const result3 = fruits.includes("apple");
console.log(result3);

// Find method
// Returns the first element in the array that satisfies the provided testing function, or undefined if no elements match.
const foundElement = fruits.find((element) => {
  return element === "banana";
});
console.log(foundElement);

// FindIndex method
// Returns the index of the first element in the array that satisfies the provided testing function, or -1 if no elements match.
const foundIndex = fruits.findIndex((element) => element === "apple");
console.log(foundIndex);

// Filter method
// Creates a new array with all elements that pass the test implemented by the provided function.
const filteredArray = fruits.filter((element) => element === "apple");
console.log(filteredArray);


// Sort method
const sortedList = fruits.sort();
console.log(sortedList);


// sort method with compare function

const sortedList2 = fruits.sort((a, b) => a.localeCompare(b));
console.log(sortedList2);


// use chain functionality
const number = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];
const result = number
  .map((element) => (element % 2 === 0 ? element * element : undefined))
  .filter((element) => element !== undefined);
console.log(result);

 

// Reduce Method

const productPrice = [200, 200, 300, 500, 800, 1000];
const totalPrice = productPrice.reduce((previousValue, element) => previousValue + element, 0);
console.log(totalPrice);
*/