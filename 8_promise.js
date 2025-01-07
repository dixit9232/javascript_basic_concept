// promise function
const name = "John";

function enrollmentStudent(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const isSuccess = Math.random() > 0.5;
      if (isSuccess) {
        resolve(`Student ${name} enrolled successfully`);
      } else {
        reject(`Student ${name} failed to enroll`);
      }
    }, 2000);
  });
}

// enrollmentStudent(name)
//   .then((result) => console.log(result))
//   .catch((error) => console.error(error))
//   .finally(() => console.log("Enrollment Completed Successfully!"));

const promise1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("promise 1 completed");
  }, 1000);
});
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("promise 2 not completed");
  }, 2000);
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promise 3 completed");
  }, 3000);
});

// promise.all method
// it's success when all promises are resolved
Promise.all([promise1, promise2, promise3])
  .then((result) => console.log("Success Promise All: ", result))
  .catch((error) => console.log("Error Promise All: ", error));

// promise.allSettled method
// it's return an array of all promises, even if some of them are rejected
Promise.allSettled([promise1, promise2, promise3])
  .then((result) => console.log("Success Promise All Settled: ", result))
  .catch((error) => console.log("Error Promise All Settled: ", error));

// promise.race method
// it's return the first promise that is resolved or rejected
Promise.race([promise1, promise2, promise3])
  .then((result) => console.log("Success Promise Race: ", result))
  .catch((error) => console.log("Error Promise Race: ", error));
