// if else:
function passwordValid(password) {
  if (password.length >= 7) {
    console.log("Strong");
  } else {
    console.log("weak");
  }
}

console.log(passwordValid("01234567"));

// ternary conditional expression:
function passwordValid2(password) {
  password >= 7 ? console.log("Strong") : console.log("weak");
}

console.log(passwordValid2("04567"));

// logical operators:
function passwordValid3(password) {
  password >= 7 && password < 10 ? console.log("Strong") : console.log("weak");
}

console.log(passwordValid3("0456798743"));

// last function- if/else statement::
function passwordValid4(password) {
  if (password.length > 7 && /[A-Z]/.test(password)) {
    return "Very Strong";
  } else if (password.length === 7) {
    return "Strong";
  } else {
    return "Weak";
  }
}

console.log(passwordValid4("0123AL43d56"));

// same function- ternary conditional expression:
function passwordValid5(password) {
  password.length > 7 && /[A-Z]/.test(password)
    ? console.log("Very Strong")
    : password.length === 7
    ? console.log("Strong")
    : console.log("Weak");
}

console.log(passwordValid5("0123AL43d56"));
