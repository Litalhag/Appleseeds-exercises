// Option 1:
const arr = ["boo", "doooo", "hoo", "ro"];

function arrLength(arr) {
  const arr2 = [];
  for (let i = 0; i < arr.length; i++) {
    arr2.push(arr[i].length);
  }
  return arr2;
}

console.log(arrLength(arr));

// Option 2:
const array = ["boo", "doooo", "hoo", "ro"];

function arrayLength(array) {
  const arrayNew = [];
  for (let item of array) {
    arrayLength.push(item.length);
  }
  return arrayNew;
}

console.log(arrLength(array));
