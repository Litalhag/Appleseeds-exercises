function lowerNumSum(array) {
  let num1 = Number.MAX_VALUE;
  let num2 = Number.MAX_VALUE;
  let index = null;

  for (let i = 0; i < array.length; i++) {
    if (array[i] < num1) {
      num1 = array[i];
      index = i;
    }
  }

  array.splice(index, 1);
  console.log(num1);

  for (const num of array) {
    if (num < num2) {
      num2 = num;
    }
  }
  console.log(num2);
  return num1 + num2;
}

console.log(lowerNumSum([3, 10, 2, 11, 98]));
