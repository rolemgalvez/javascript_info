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
*/

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
