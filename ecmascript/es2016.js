// find power using ecmascript
//Syntax
// base value ** exponent value // 2**3 which is 2*2*2 this is ecmascript method to find power of a number
// old method is Math.pow(base,exponent);

const base = 2;
const exponent = 3;
// traditional way
// const power = Math.pow(2, 3);

// latest way
const power = base ** exponent;

console.log(power);

// ex. find a area of circle

const radius = 10;
const area = Math.PI * radius ** 2;
console.log(area);
