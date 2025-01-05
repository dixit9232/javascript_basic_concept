// array find last and find last index method
const array = [1, 2, 3, 4, 5, 6];
const lastElem = array.findLast((elem) => elem);
const lastElemIndex = array.findLastIndex((elem) => elem);
console.log(lastElem);
console.log(lastElemIndex);

// array toReversed method

const newArray = ['a', "e", "g", "h", "m", "k"];
const reversedArray = newArray.toReversed();
console.log(reversedArray);