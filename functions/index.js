// first-class function

function greet(name) {
  console.log(`Hello ${name}!`);
}

const greetUser = greet;

greetUser("Dixit");

// Higher Order Function && callBack Function

function function1(name, callBack) {
  console.log(`Hello ${name}!`);
  callBack(name);
}

function callBack(name) {
  console.log(`How are you ${name}?`);
}

function1('dixit', callBack);