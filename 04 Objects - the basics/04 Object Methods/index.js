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

*/
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
