// empty bus = o people
// to go through each bus stop, one by one
// for each bus stop: (a loop)
// subtract the number of people getting off the bus from the current number of people are on the bus
// add the number of people getting on the bus to the current number of people on the bus
// last bus stop-the number of people on the bus
// return this final number of people
// input: busStops (array)
// totalPeople = the amount of the people who left on the bus

function busStopsPeople(busStops) {
  let totalPeople = 0;

  //iterates over each bus stop in the busStops array
  for (let i = 0; i < busStops.length; i++) {
    let currentStop = busStops[i];
    let getOn = currentStop[0];
    let getOff = currentStop[1];

    totalPeople += getOn;
    totalPeople -= getOff;
  }
  return totalPeople;
}

console.log(
  busStopsPeople([
    [3, 0],
    [4, 2],
    [2, 1],
  ])
);
