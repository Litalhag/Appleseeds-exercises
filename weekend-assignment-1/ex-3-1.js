// p = 1000, 1000 * 0.2 = the amount of percent population increase at the first year
// 1000 * 0.2 + 50 = the overall amount of population increase at the first year
// p0 = 1000
// percent = 2
// aug = 50
// We want to find out how many years it will take for the population to reach target population (p) of 1200.
// function parameters:
// p0 (population on the beginning)
// percent (the percent of population growth pre year) = 0.2
// aug (the amount of new inhabitants each year) = +50
// p (target population)
// function returns n = number of entire years needed to get a population <= p.
// creating new var: currentPopulation = p0, which will follow the current population
// creating new var2: years = 0, which will follow the number of years

function nb_year(p0, percent, aug, p) {
  let currentPopulation = p0; //track the current population
  let years = 0; //track the number of years
  //for loop with the variable year = 0
  for (let year = 0; currentPopulation < p; year++) {
    //loop condition:continue til the currentPopulation reaches 'p'= target population
    //Once current population is >= target population - condition is not true - loop stops
    currentPopulation += (currentPopulation * percent) / 100 + aug;
    // increment 'years' by 1 after each iteration, to count the number of years that have passed
    // (to keep track of the number of years it takes for the population to reach the target population)
    years += 1;
  }
  return years;
}

console.log(nb_year(1000, 2, 50, 1200));
console.log(nb_year(1500, 5, 100, 5000));
