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
*/

// Outer Variable
let username = "Juan";

function showMessage() {
  let message = "Hello " + username;
  alert(message);
}

showMessage();
