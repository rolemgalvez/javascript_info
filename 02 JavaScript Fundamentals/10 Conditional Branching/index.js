/*
let answer = prompt("1 + 1 is?", "");
if (answer == 2) alert("You're right!");

let answer = prompt("1 + 1 is?", "");
if (answer == 2) {
  alert("You're right!");
  alert("How amazing of you!");
}
*/

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
