function countryToLiveIn(language, isIsland, population, country) {
  if (language === "English" && population < 50 && !isIsland) {
    console.log(`You should consider living in ${country}`);
  } else {
    console.log(`${country} does not meet your criteria`);
  }
}

countryToLiveIn("English", false, 40, "England");
countryToLiveIn("English", true, 70, "Canada");
countryToLiveIn("Spanish", false, 20, "Argentina");
