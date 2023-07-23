function nb_year(p0, percent, aug, p) {
  let population = p0,
    years = 0;
  percent = !percent ? 0 : percent / 100;
  // if (percent===null){
  //     percent=0;
  // }
  // else{
  //     percent=percent/100;
  // }
  // negative emigration
  if (!percent && aug < 0) {
    console.log(
      "negative emigration, calculating years to reach min positive population"
    );
  }
  while (population < p && population >= Math.abs(aug)) {
    years++;
    population = population + population * percent + aug;
  }
  return years;
}
console.log(nb_year(1500, 150, 0, 7500));
