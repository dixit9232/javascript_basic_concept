// big int
const maxNumber = Number.MAX_SAFE_INTEGER;
// console.log(maxNumber);
// Output: 9007199254740991
const bigInt = BigInt(maxNumber);
// Cannot mix BigInt and other types, use explicit conversions
const add = bigInt + 10n;
// console.log(add);
// Output: 90071992547410001n

// nullish coalescing operator: this operator returns the first operand if it is not null or undefined, otherwise it returns the second operand.

const number = 0;
// const value = number || 10; // || operator will return the first truthy value so output is 10
// console.log(value);
const value = number ?? 10; // ?? operator will return the first operand if it is not null
// console.log(value);

// object with null condition handler using ?. 1
const user = {
  name: "John",
  age: 30,
  address: {
    // city: "surat",
    pin: 395010,
  },
};

const city = user.address?.city ?? "City is not available in object";
// console.log(city);

const obj = {
  name: "John",
  age: 30,
  address: {
    city: "Surat",
    pin: 395010,
    location: {
      // latitude: 21.1759,
      longitude: 72.8777,
    },
  },
};

const locationLatitude =
  obj.address?.location?.latitude ?? "Latitude not available in objects";
const locationLongitude =
  obj.address?.location?.longitude ?? "Longitude not available in objects";

console.log(locationLatitude);
console.log(locationLongitude);
