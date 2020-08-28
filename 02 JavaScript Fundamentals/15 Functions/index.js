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
*/

// Using Nullish Coalescing Operator (??)
function showCount(count) {
  alert(count ?? "unknown");
}

showCount(0); // 0
showCount(null); // unknown
showCount(); // unknown
