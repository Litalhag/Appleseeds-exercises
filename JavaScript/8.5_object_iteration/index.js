// Create a function that receives 1 argument, an object, and returns a new object with the properties and values swapped.
const user = {
  name: "Lital",
  lastName: "Hagayan",
};

const swapObj = (user) => {
  const result = {};
  for (const key in user) {
    result[user[key]] = key;
  }
  return result;
};
console.log(swapObj(user));
