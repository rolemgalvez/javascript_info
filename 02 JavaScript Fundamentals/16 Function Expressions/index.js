/*
// Function Declaration'
function sayHi() {
  alert("Hello");
}

// Function Expression
let sayHi = function () {
  alert("Hello");
};

alert(sayHi);


// Copying Function
function sayHi() {
  alert("Hello");
}

let func = sayHi;

func(); // Hello
sayHi(); // Hello

// Copying Function through Expression
let sayHi = function () {
  alert("Hello");
};

func(); // Hello
sayHi(); // Hello
 

// Callback functions or Callbacks
function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

function showOk() {
  alert("You agreed.");
}

function showCancel() {
  alert("You cancelled the execution");
}

// Usage of ask()
ask("Do you agree?", showOk, showCancel);

// Callback using Function Expression
function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

ask(
  "Do you agree?",
  function () {
    alert("You agreed.");
  },
  function () {
    alert("You cancelled the execution");
  }
);

// Using Function Expression to be available outside code block
let age = +prompt("How old are you?", 18);

let welcome;

if (age < 18) {
  welcome = let age = +prompt("How old are you?", 18);

  let welcome;
} else {
  welcome = function () {
    alert("Greetings!");
  };
}

welcome();
*/

// Simplified Version
let age = +prompt("How old are you?", 18);

let welcome =
  age < 18
    ? function () {
        alert("Welcome!");
      }
    : function () {
        alert("Greetings!");
      };

welcome();
