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
 */

// Copying Function through Expression
let sayHi = function () {
  alert("Hello");
};

func(); // Hello
sayHi(); // Hello
