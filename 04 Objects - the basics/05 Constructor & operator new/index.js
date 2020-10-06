/*
// Constructor Function
function User(name) {
  this.name = name;
  this.isAdmin = false;
}

let user = new User("Juan");

alert(user.name); // Juan
alert(user.isAdmin); // false

// Construct for one use 
let user2 = new function() {
    this.name = "Peter";
    this.age = 42;

    // other complex codes
};

// new.target -> to know if new is used when the function is called
function User() {
  alert(new.target);
}

// without new
User(); // undefined

// with new
new User(); // function User() { ... }

// Constructor without using new - not advisable
function User(name) {
  if (!new.target) {
    return new User(name); // adding new
  }

  this.name = name;
}

let john = User("John"); // redirects to user with new operator
alert(john.name); // John

// Constructor with return
function BigUser() {
  this.name = "Ben";

  return { name: "Gwen" }; // return is prioritized if it returns an object
}

alert(new BigUser().name); // Gwen

function smallUser() {
  this.name = "Ben";

  return "Gwen"; // don't care to this because it's not an object
}

alert(new smallUser().name); // Ben

// Methods in Constructor
function User(name) {
  this.name = name;

  this.sayHi = function () {
    alert("My name is " + this.name);
  };
}

let john = new User("John");
john.sayHi();

// Two functions 1 object
let obj = {};

function A() {
  return obj;
}
function B() {
  return obj;
}

alert(new A() == new B()); // true

// Create new calculator
function Calculator() {
  this.read = function () {
    this.n1 = +prompt("Enter 1st number", 0);
    this.n2 = +prompt("Enter 2nd number", 0);
  };
  this.sum = function () {
    return this.n1 + this.n2;
  };
  this.mul = function () {
    return this.n1 * this.n2;
  };
}

let calculator = new Calculator();
calculator.read();

alert("Sum=" + calculator.sum());
alert("Mul=" + calculator.mul());

*/
// Create new Accumulator
function Accumulator(startingValue) {
  this.value = startingValue;
  this.read = function () {
    this.value += +prompt("Enter number", 0);
  };
}

let accumulator = new Accumulator(1); // initial value 1

accumulator.read(); // adds the user-entered value
accumulator.read(); // adds the user-entered value

alert(accumulator.value); // shows the sum of these values
