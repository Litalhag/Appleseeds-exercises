// a century a year belongs to = divide the year by 100 and round the result up to the nearest whole number
//  example: year is 1705 / 100 = 17.05, round up = 18
// example: year is 1900 / 100 = 19
// example: year is 1601 / 100 = 16.01, round up = 17
// steps:
// define a function named 'centuryFromYear', parameter 'year'.
// year / 100
// using Math.ceil() to round up to the closest number
// year = Math.ceil(year / 100);

function centuryFromYear(year) {
  year = Math.ceil(year / 100);
  return year;
}

console.log(centuryFromYear(1705));
console.log(centuryFromYear(1900));
console.log(centuryFromYear(1601));
console.log(centuryFromYear(2000));

// arrow function
const centuryFromYear2 = (year) => Math.ceil(year / 100);

console.log(centuryFromYear2(1705));
console.log(centuryFromYear2(1900));
console.log(centuryFromYear2(1601));
console.log(centuryFromYear2(2000));
