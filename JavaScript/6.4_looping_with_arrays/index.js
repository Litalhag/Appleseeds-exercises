// Create an array containing 4 population values of 4 countries of your choice. Store this array into a variable called 'populations'
const population = [100, 200, 300, 400];

function percentageOfWorld(population) {
  return (population / 7900) * 100;
}

// console.log(percentageOfWorld(population));

// ([100, 200, 300, 400] / 7900) * 100;

function populationPercentages(arr) {
  // 1. create an array
  const percentages = [];
  // 2. loop over the array passed to the function
  for (const populationItem of arr) {
    // 3. create a constant `percent' and in each iteration assign the returned value from the percentageOfWorld function, that is given the current element.
    const percent = percentageOfWorld(populationItem);
    // 4. push this percent constant to the percentages array
    percentages.push(percent);
  }
  // 5. return the percentages array
  return percentages;
}

populationPercentages(population);
