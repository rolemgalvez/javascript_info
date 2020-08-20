/*
let answer = prompt("1 + 1 is?", "");
if (answer == 2) alert("You're right!");

let answer = prompt("1 + 1 is?", "");
if (answer == 2) {
  alert("You're right!");
  alert("How amazing of you!");
}

// Boolean conversion
if (0) {
  // This will not execute because 0, and also "", null, undefined, NaN, and false are all falsy values
  alert("You can't see me");
}

if (1) {
  // This will execute because it's true
  alert("You can see me");
}

let answer = prompt("1 + 1 is?", "");
let correctAnswer = answer == 2;
if (correctAnswer) {
  alert("Hooray!");
}

// else
let answer = prompt("1 + 1 is?", "");
if (answer == 2) {
  alert("Correct!");
} else {
  alert("Wrong!");
}

// if else
let answer = prompt("1 + 1 is?", "");
if (answer < 2) {
  alert("Higher Please");
} else if (answer > 2) {
  alert("Lower Please");
} else {
  alert("That's enough");
}

// Conditional Operator "?"
// Assigning value to a variable based from input

// Longer Way:
let accessAllowed;
let age = prompt("How old are you?", "");
if (age >= 18) {
    accessAllowed = true;
} else {
    accessAllowed = false;
}

// Shorter Way
let age = prompt("How old are you?", "");
let accessAllowed = age >= 18 ? true : false;

// Multiple "?"
let age = prompt("How old are you?", "");
let message =
  age < 3
    ? "Hi baby!"
    : age < 18
    ? "Hello there!"
    : age < 100
    ? "Greetings!"
    : "What an unusual age!";

// NOT Recommended way of using "?"
let answer = prompt("What is 2 + 2?", "");
answer == 4 ? alert("You're right") : alert("Wrong.");
// "?" purpose is to assign value to another based on a condition. Use it for that for readability also

// TASKS: if (a string with zero)
if ("0") {
  // Will alert
  alert("Henlo");
}

// TASK 1: The name of JavaScript
let answer = prompt('What\'s the "official" name of JavaScript?', "");
if (answer == "ECMAScript") {
  alert("Right!");
} else {
  alert("Didn't know? ECMAScript!");
}

// TASK 2: Show the sign
let number = +prompt("Enter a number", 0);
if (number > 0) {
  alert(1);
} else if (number < 0) {
  alert(-1);
} else {
  alert(0);
}
*/

// TASK 3: Rewrite 'if' into '?'
let a = +prompt("Enter 1st number", 0);
let b = +prompt("Enter 2nd number", 0);
let result = a + b < 4 ? "Below" : "Over";
alert(result);
