// show Date using new Date() object
const currentDateTime = new Date();
console.log(currentDateTime);

// show Date using Date(date String) function
const date = new Date("2024-03-20T10:30:00.000");
console.log(date);

// show Date using Date(year, month) function
const yearMonthDate = new Date(2024, 2);
console.log(yearMonthDate);

// show Date using Date(year, month, day) function
const yearMonthDayDate = new Date(2024, 2, 20);
console.log(yearMonthDayDate);

// show Date using Date(year, month, day, hours) function
const yearMonthDayHoursDate = new Date(2024, 2, 20, 10);
console.log(yearMonthDayHoursDate);

// show Date using Date(year, month, day, hours, minutes) function
const yearMonthDayHoursMinutesDate = new Date(2024, 2, 20, 10, 30);
console.log(yearMonthDayHoursMinutesDate);

// show Date using Date(year, month, day, hours, minutes, seconds) function
const yearMonthDayHoursMinutesSecondsDate = new Date(2024, 2, 20, 10, 20, 30);
console.log(yearMonthDayHoursMinutesSecondsDate);

// show Date using Date(year, month, day, hours, minutes, seconds, milliseconds) function
const yearMonthDayHoursMinutesSecondsMillisecondsDate = new Date(
  2024,
  2,
  10,
  20,
  30,
  40,
  297
);
console.log(yearMonthDayHoursMinutesSecondsMillisecondsDate);

// show Date using Date(millisecond) function
const millisecondDate = new Date(1643723400000);
console.log(millisecondDate);

// note : in Date Function Month is start from 0 (January) to 11 (December)

//get year from Date object
const year = currentDateTime.getFullYear();
console.log(year);

// get month from Date object
const month = currentDateTime.getMonth();
console.log(month);

// get day from Date object
const day = currentDateTime.getDate();
console.log(day);

// get hours from Date object
const hours = currentDateTime.getHours();
console.log(hours);

// get minutes from Date object
const minutes = currentDateTime.getMinutes();
console.log(minutes);

// get seconds from Date object
const seconds = currentDateTime.getSeconds();
console.log(seconds);

// get milliseconds from Date object
const milliseconds = currentDateTime.getMilliseconds();
console.log(milliseconds);

// note: in Date Object Day is start from 0 (Sunday) to 6 (Saturday)

// set year from Date object
currentDateTime.setFullYear(2025);
console.log(currentDateTime);

// set month from Date object
currentDateTime.setMonth(3);
console.log(currentDateTime);

// set day from Date object
currentDateTime.setDate(15);
console.log(currentDateTime);

// explore Date.now()

const now = Date.now();
console.log(now);

// toLocaleString
const date1 = new Date();
const dateString = date1.toLocaleString();
console.log(dateString);

// toLocaleDateString
console.log(date1.toLocaleDateString());

// toLocaleTimeString
console.log(date1.toLocaleTimeString());

// difference between two dates
const date2 = new Date("2024-12-15T10:30:00");
const getDifferenceBetweenTwoDates = (date1, date2) => {
  const oneDayMillisecond = 24 * 60 * 60 * 1000;
  const difference = Math.abs(date1 - date2);
  return Math.round(difference / oneDayMillisecond);
};

const difference = getDifferenceBetweenTwoDates(date1, date2);
console.log(difference);
