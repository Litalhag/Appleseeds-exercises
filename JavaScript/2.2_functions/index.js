function tellFortune(jobTitle, location, partnerName, numberOfChildren) {
  return `You will be a${jobTitle} in ${location} married to ${partnerName} with ${numberOfChildren} child`;
}

const info = tellFortune("Musician", "London", "Steven Wilson", 1);

console.log(info);

// function tellFortune(jobTitle, location, partnerName, numberOfChildren) {
//   return `You will be a ${jobTitle} in ${location} and married to ${partnerName} with ${numberOfChildren} children.`;
// }
// const fortune1 = tellFortune("programmer", "New York", "Rana", 2);
// const fortune2 = tellFortune("doctor", "Los Angeles", "Sarah", 1);
// const fortune3 = tellFortune("teacher", "Chicago", "Michael", 3);
// // Logging the returned fortunes to the console
// console.log(fortune1);
// console.log(fortune2);
// console.log(fortune3);
// //2 continue
// const fortune4 = tellFortune("sport", "italy", "nadia", 26);
// const fortune5 = tellFortune("musican", "paris", "ahmad", 30);
// const fortune6 = tellFortune("writer", "israel", "noor", 14);
// console.log(fortune4);
// console.log(fortune5);
// console.log(fortune6);
// //3 continue
// console.log(tellFortune("sport", "italy", "nadia", 26));
// console.log(tellFortune("musican", "paris", "ahmad", 30));
// console.log(tellFortune("writer", "israel", "noor", 14));
