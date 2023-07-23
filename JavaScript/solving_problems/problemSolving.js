// * Write a function that receives a string and returns an object with the count of every character in the string. *

// ? Understand the problem -> ask questions ?

/*  
    1. receives a string.
    2. returns an object with the count of every character in the string.
    3. Should we return a list of only the existing letters or also of the missing letters when their quantity as 0? 
    4. How should lowercase and uppercase letters be treated? How should numbers be treated? or punctuation? 
        or spaces? How should the input of an empty string or no input at all be treated? 
    5. How to refer to an input of a number? is it legal?
*/

// ? Explore concrete examples ?
// * charCount("hello") { h: 1, e: 1, l: 2, o: 1 } *


// ? Break it down to smaller pieces -> write pseudo code ?
function charCount(str) {
  // Do something

  // return an object with keys 
  // that are the lowercase 
  // alphanumeric characters in the strings
  // and the values are the number of times
  // that they are in the string
}

function charCount(str) {
  // Make an object
  // loop over the string

  // Do something

  // Return the object with keys 
  // that are the lowercase 
  // alphanumeric characters in the strings
  // and the values are the number of times
  // that they are in the string
}

function charCount(str) {
  // Turn the string to lower case
  // Make an object
  // loop over the string

  // For each char - num or str
  // if in obj, add 1 to count,
  // otherwise initialize to 1.
  // If not alphanumeric, do nothing

  // Return the object with keys 
  // that are the lowercase 
  // alphanumeric characters in the strings
  // and the values are the number of times
  // that they are in the string
}


// ? Solving/Simplify the problem ?

/*
  Let's say we don't remember the name of the JavaScript function that converts strings to lowercase letters or we don't know how to check if a character is alphanumeric. 
  We'll start writing the parts of the solution that we know how to solve and we'll leave those problems for the end, and we'll leave these parts as comments.
*/


// ? Refactoring ?
/*
  Refactoring Questions:
    - Is it possible to understand the code at a glance? How intuitive is it?
    - Can the performance of the function be improved?
    - Will the code work in all end cases?
    - Is there a way to solve the problem differently than what I did?
    - Can this function solve similar problems I've had in the past?
    - Does the code follows the accepted convention?
    - How did other people solve a similar problem?
*/

function charCount(str) {
  str = str.toLowerCase();
  const obj = {};
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (/[a-z0-9]/.test(char)) {
      if (obj[char] > 0) {
        obj[char]++;
      } else {
        obj[char] = 1;
      }
    }
  }
  return obj;
}

function charCount(str) {
  str = str.toLowerCase();
  const obj = {};
  for (let char of str) {
    if (/[a-z0-9]/.test(char)) {
      if (obj[char] > 0) {
        obj[char]++;
      } else {
        obj[char] = 1;
      }
    }
  }
  return obj;
}

function charCount(str) {
  str = str.toLowerCase();
  const obj = {};
  for (let char of str) {
    if (/[a-z0-9]/.test(char)) {
      obj[char] = ++obj[char] || 1;
    }
  }
  return obj;
}


// BETTER PERFORMANCE 
// Since the use of Regex is less efficient
function isAlphaNumeric(char) {
  const code = char.charCodeAt(0);
  if (!(code > 47 && code < 58) && // numeric (0-9)
    !(code > 64 && code < 91) && // upper alpha (A-Z)
    !(code > 96 && code < 123)) { // lower alpha (a-z)
    return false;
  }
  return true;
}

function charCount(str) {
  const obj = {};
  for (let char of str) {
    if (isAlphaNumeric(char)) {
      char = char.toLowerCase();
      obj[char] = ++obj[char] || 1;
    }
  }
  return obj;
}

console.log(charCount("Luke, I'm your father!"));
console.log(charCount("hello"));

charCount("aaa"); // {a: 3}
charCount("hello"); // { h: 1, e: 1, l: 2, o: 1 }