/* 
function showMessage() {
  alert("Hello everyone");
}

showMessage();
showMessage();

// Local Variable
function showMessage() {
  let message = "Henlo po";
  alert(message);
}

showMessage();
alert(message); // Error

// Outer Variable
let username = "Juan";

function showMessage() {
  let message = "Hello " + username;
  alert(message);
}

showMessage();

// Modifying outer variable
let username = "Juan";

function showMessage() {
  username = "Bob";
  let message = "Hello " + username;
  alert(message);
}

alert(username); // Juan
showMessage(); // Bob
alert(username); // Bob

// Shadowing global variable
let username = "Juan";

function showMessage() {
  let username = "Bob";
  let message = "Hello " + username;
  alert(message);
}

alert(username); // Juan
showMessage(); // Bob
alert(username); // Juan

// Parameters
function showMessage(from, text) {
  alert(`${from}: ${text}`);
}

showMessage("Juan", "Henlo"); // Juan: Henlo
showMessage("Pedro", "Yowlo"); // Pedro: Yowlo

// Parameter changing only locally
function showMessage(from, text) {
  from = `**${from}**`;
  alert(`${from}: ${text}`);
}

let from = "Juan";
showMessage(from, "Henlo"); // **Juan**: Henlo
alert(from); // Juan, because it's only modified locally in showMessage()

// Default values
function showMessage(from, text = "default text") {
  alert(`${from}: ${text}`);
}

showMessage("Juan");
showMessage("Juan", "Henlo");
showMessage(); // undefined if no default value given

// Sample Complex Default Values
function showMessage(from, text = anotherFunction()) {
  // text will have value from another function
  alert(`${from}: ${text}`);
}

function anotherFunction() {
  return 1 + 1 == 2 ? "two" : "unknown";
}

showMessage("Juan");

// Alternative default parameter
function showMessageV1(text) {
  if (text == undefined) {
    text = "empty text";
  }
  alert(text);
}

function showMessageV2(text) {
  // using ||
  text = text || "empty text";
  alert(text);
}

showMessageV1();
showMessageV2();

// Using Nullish Coalescing Operator (??)
function showCount(count) {
  alert(count ?? "unknown");
}

showCount(0); // 0
showCount(null); // unknown
showCount(); // unknown

// Returning Value
function sum(a, b) {
  return a + b;
}

let result = sum(2, 3);
alert(result);

// Multiple return
function checkAge(age) {
  if (age >= 18) {
    return true;
  } else {
    return confirm("Do you have permission from your parents?");
  }
}

let age = prompt("How old are you?", 18);

if (checkAge(age)) {
  alert("Access Granted");
} else {
  alert("Access Denied");
}

// Return without a value
function showMovie(age) {
  if (checkAge(age)) {
    return;
  }

  alert("Showing you the movie");
}
showMovie(3);


// Empty or without return value
function doNothing() {
  // empty
}
alert(doNothing() === undefined); // true

function returnNothing() {
  return;
}
alert(returnNothing() === undefined); // true
*/

// Using Function as Comment

// Version 1: Do all things in one function
function showPrime1(n) {
  nextPrime: for (let i = 2; i < n; i++) {
    for (let j = 2; j < i; j++) {
      if (i % j == 0) continue nextPrime;
    }

    alert(i);
  }
}

showPrime1(10);

// Version 2: Separation of functions
function showPrime2(n) {
  for (let i = 2; i < n; i++) {
    if (!isPrime(i)) continue;
    alert(i);
  }
}

function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if (n % i == 0) return false;
  }
  return true;
}

showPrime2(10);
