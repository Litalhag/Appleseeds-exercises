const people = ["Greg", "Mary", "Devon", "James"];

// Using a loop, iterate through this array and console.log all of the people.

for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
}

// Write the command to remove "Greg" from the array.
const peopleLess = people.shift();

console.log(peopleLess);
console.log(people);

// Write the command to remove "James" from the array.

const peopleLess2 = people.pop();

console.log(peopleLess2);
console.log(people);

// Write the command to add "Matt" to the front of the array.

const peopleAddMatt = people.unshift("Matt");

console.log(peopleAddMatt);
console.log(people);

// Write the command to add your name to the end of the array.

const peopleAddLital = people.push("Lital");

console.log(peopleAddLital);
console.log(people);

// Using a loop, iterate through this array, and after console.log "Mary", exit from the loop.
// const peopleNew = ["Matt", "Mary", "Devon", "Lital"];

for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
  if (people[i] === "Mary") {
    break;
  }
}

// Write the command to make a copy of the array using a slice. The copy should NOT include "Mary" or "Matt".
let peopleNew = people.slice(0, 2);

console.log(peopleNew);

// Write the command that gives the indexOf where "Mary" is located.
console.log(people.indexOf("Mary"));

// Write the command that gives the indexOf where "Foo" is located (this should return -1).
console.log(people.indexOf("Foo"));

// Redefine the people variable with the value you started with. Using the splice command, remove "Devon" from the array and add "Elizabeth" and "Artie". Your array should look like this when you are done ["Greg, "Mary", "Elizabeth", "Artie", "James"]

console.log(people);

let newPeople = ["Greg", "Mary", "Devon", "James"];

newPeople.splice(2, 0, "Elizabeth", "Artie");

console.log(newPeople);

newPeople.splice(4, 1);

console.log(newPeople);

// Create a new variable called WithBob and set it equal to the people array concatenated with the string of "Bob".

const withBob = people.concat("Bob");
console.log(withBob);
