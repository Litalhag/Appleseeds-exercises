// const creditCardNumber = "4580 0405 9878 0212"; // Credit card number with spaces for better readability
// const maskedNumber = creditCardNumber.replace(/\d/g, "#");
// console.log(maskedNumber); // Output: "#### #### #### ####"
// const str1 = "4580 0405 9878 0212";
// newStr = str1.replace(/\d/, "#");
// console.log(newStr);

function maskCreditCard(cardNum) {
  let hideCardNum = [];
  for (let i = 0; i < cardNum.length; i++) {
    if (i < cardNum.length - 4) {
      hideCardNum.push("#");
    } else {
      hideCardNum.push(cardNum[i]);
    }
  }
  return hideCardNum.join("");
}

console.log(maskCreditCard("4580 0405 9878 0212"));
