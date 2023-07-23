// There is an array with numbers, and all numbers are equal except for one.
// the task is to find the unique number in the array.
// input: will be an array of numbers, guaranteed to contain at least 3 numbers.
// i need to find the number that appears only once in the array.
// iterate over the array and compare each number with the others to find the unique number.

function findUniq(array) {
  for (let i = 0; i < array.length; i++) {
    let currentItem = array[i];
    let firstIndex = array.indexOf(currentItem);
    let lastIndex = array.lastIndexOf(currentItem);

    if (firstIndex === lastIndex) {
      return currentItem;
    }
  }
}

console.log(findUniq([1, 1, 3, 1, 1]));
