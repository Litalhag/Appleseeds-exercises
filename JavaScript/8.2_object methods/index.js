const myCountry = {
  country: "Finland",
  capital: "Helsinki",
  language: "Finnish",
  population: 60000000,
  neighbors: ["Sweden", "Norway", "Russia"],

  describe: function () {
    console.log(
      `${this.country} has ${this.population} people, their mother tongue is ${this.language}, they have ${this.neighbors.length} neighbors countries and a capital city named ${this.capital}.`
    );
  },

  checkIsland: function () {
    this.isIsland = !!this.neighbors.length;
    // this.isIsland = this.neighbors.length === 0;
    // this.isIsland = this.neighbors.length === 0 ? true : false;
    console.log(this.isIsland);
  },
};

myCountry.describe();
myCountry.checkIsland();

console.log(myCountry);
