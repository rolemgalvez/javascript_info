/*
let user = {
  name: "Juan",
  age: 23,
};

user.sayHi = function () {
  alert("Hello");
};

// Method: a FUNCTION that is a PROPERTY of an OBJECT
user.sayHi();

// Object Literal
let user1 = {
  sayHello: function () {
    alert("Hi");
  },
};

// shorter syntax
let user2 = {
  sayHello() {
    alert("Hi");
  },
};

user1.sayHello();
user2.sayHello();


// this
let user = {
  name: "Juan",
  age: 23,

  sayHi() {
    alert(this.name);
  },
};

user.sayHi();

// using "this" for a function used by different objects
let user1 = { name: "Pedro" };
let user2 = { name: "Raquel" };

function sayHi() {
  alert(this.name);
}

user1.func = sayHi;
user2.func = sayHi;

user1.func(); // "Pedro"
user2.func(); // "Raquel"
user2["func"](); // "Raquel"

// Arrow functions have no "this"
let user = {
  firstName: "Pedro",
  sayHi() {
    let arrow = () => alert(this.firstName);
    arrow();
  },
};

user.sayHi(); // Pedro

// Task 2: Create a calculator
let calculator = {
  read() {
    this.val1 = +prompt("Enter value 1", 0);
    this.val2 = +prompt("Enter value 2", 0);
  },
  sum() {
    return this.val1 + this.val2;
  },
  mul() {
    return this.val1 * this.val2;
  },
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());
*/

// Task 3: Chaining
let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep: function () {
    alert(this.step);
    return this;
  },
};

ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 1

ladder.step = 0;
ladder.up().up().down().showStep(); // 1
