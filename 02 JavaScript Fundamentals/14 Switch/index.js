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
*/

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
