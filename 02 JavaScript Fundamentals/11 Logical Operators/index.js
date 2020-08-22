/*
// OR (||)
alert(true || true); // true
alert(true || false); // true
alert(false || true); // true
alert(false || false); // false

// OR with if
if (1 || 0) {
  // 1, sample as (true || false)
  alert("Truthfully!");
}

let hour = 9;
if (hour < 10 || hour > 18) {
  alert("The office is closed.");
}

let hour = 13;
let isWeekend = true;
if (hour < 10 || hour > 18 || isWeekend) {
  alert("The office is closed.");
}

// OR “||” finds the first truthy value. Return last if all are false
alert(1 || 0); // 1
alert(null || 1); // 1
alert(null || 0 || 1); // 1
alert(undefined || null || 0); // 0, because no true left

// Using OR to display name from given inputs
let firstName = "";
let lastName = "";
let nickName = "SuperCoder";
alert(firstName || lastName || nickName || "Anonymous"); // "SuperCoder"

// Short-circuit evaluation
true || alert("not printed");
false || alert("printed");

// AND (&&)
alert(true && true); // true
alert(true && false); // false
alert(false && true); // false
alert(false && false); // false

let hour = 12;
let minute = 30;

if (hour == 12 && minute == 30) {
  alert("The time is 12:30");
}

if (1 && 0) {
  // works like OR
  alert("Won't show because result is false");
}

alert(1 && 0); // 0, returns the falsy value
alert(null && 5); // null
alert(0 && "No matter what"); // 0
alert(1 && 2 && null && 3); // null
alert(1 && 5); // 5, returns last value if there are NO falsy value
alert(1 && 2 && 3); // 3

// NOT (!)
alert(!false); // true, reverse operand
alert(!true); // false
alert(!0); // true
alert(!1); // false

// !! convert to boolean values
alert(!!"non-empty string"); // true
alert(!!null); // false
// same as Boolean() function
alert(Boolean("non-empty string")); // true
alert(Boolean(null)); // false

// TASK 1: What are the results?
alert(null || 2 || undefined); // 2
alert(alert(1) || 2 || alert(3)); // 1
alert(1 && null && 2); // null
alert(alert(1) && alert(2)); // 1, undefined
alert(null || (2 && 3) || 4); // 3

// TASK 2: Check the range
let age = prompt("Enter an age", "");
let inclusiveAge = age >= 14 && age <= 19;
let exclusiveAge1 = !inclusiveAge;
let exclusiveAge2 = age < 14 || age > 19;

// TASK 3: What is the result?
if (-1 || 0) alert("first"); // "first"
if (-1 && 0) alert("second"); //
if (null || (-1 && 1)) alert("third"); // "third"

// TASK 4: Check the login
let login = prompt("Login", "");
let isAdmin = login == "Admin";
if (isAdmin) {
  let password = prompt("Passwprd", "");
  let rightPassword = password == "TheMaster";
  if (rightPassword) {
    alert("Welcome");
  } else if (password == "" || password == null) {
    alert("Cancelled");
  } else {
    alert("Wrong Password");
  }
} else if (login == "" || login == null) {
  alert("Cancelled");
} else {
  alert("I don't know you");
}
*/
