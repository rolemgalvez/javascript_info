/*
let a = 2 + 2;
switch (a) {
  case 3:
    alert("Too Small");
    break;
  case 4:
    alert("Exactly!");
    break;
  case 5:
    alert("Too Large");
    break;
  default:
    alert("I don't kow such values");
}

// Without Break

let a = 2 + 2;
switch (a) {
  case 3:
    alert("Too Small");
    break;
  case 4:
    alert("Exactly!");
  case 5:
    alert("Too Large");
  default:
    alert("I don't kow such values");
}

// Switch allows arbitrary expressions
let a = "1";
let b = 0;
switch (+a) {
  case b + 1:
    alert("This will show because b+1 is equal to +a value");
    break;
  default:
    alert("This will not run");
}

// Grouping of cases
let a = 3;
switch (a) {
  case 2:
    alert("This is 2");
    break;
  case 3:
  case 4:
    alert("This is 4");
    break;
  default:
    alert("This is default broo");
}

// Type Matters
let number = "3";
switch(number) {
  case "1":
    alert("This is string 1");
    break;
  case "2":
    alert("This is string 2");
    break;
  case 3:
    alert("This is number 3");
    break;
  default:
    alert("No match found");
}

// TASK 1: Rewrite the "switch" into an "if"
let browser = prompt("Enter a browser", "");
if (browser == "Edge") {
  alert("Edge!");
} else if (
  browser == "Chrome" ||
  browser == "Firefox" ||
  browser == "Safari" ||
  browser == "Opera"
) {
  alert("Alright!");
} else {
  alert("Is it okay?");
}
*/

// TASK 2: Rewrite "if" into "switch"
let a = +prompt("a?", "");
switch (a) {
  case 0:
    alert(0);
    break;
  case 1:
    alert(1);
    break;
  case 2:
  case 3:
    alert("2, 3");
    break;
}
