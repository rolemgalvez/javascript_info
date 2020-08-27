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
*/

// Parameter changing only locally
function showMessage(from, text) {
  from = `**${from}**`;
  alert(`${from}: ${text}`);
}

let from = "Juan";
showMessage(from, "Henlo"); // **Juan**: Henlo
alert(from); // Juan, because it's only modified locally in showMessage()
