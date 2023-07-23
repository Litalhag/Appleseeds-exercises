function findPerimeter(width, height) {
  return 2 * (width + height);
}

console.log(findPerimeter(20, 10));

// arrow function
const findPerimeter2 = (width, height) => 2 * (width + height);
console.log(findPerimeter2(20, 10));
