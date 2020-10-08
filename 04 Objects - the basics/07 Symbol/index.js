/*
// Declaration
let id1 = Symbol();
let id2 = Symbol("id"); // with description
let id3 = Symbol("id");

alert(id2 == id3); // false
alert(id2.toString()); // Symbol(id)
alert(id2.description); // id

// Assigning Symbol
let user = {
  name: "John",
};

let id = Symbol("id");

user[id] = 1;

alert(user[id]); // 1

// Symbols in an object literal
let id = Symbol("id");

let user = {
  name: "Juan",
  [id]: 123, // not the same as "id": 123
};


// Symbols is not access in for..in loop
let id = Symbol("id");
let user = {
  name: "Juan",
  age: 21,
  [id]: 123,
};

for (let key in user) {
  alert(key);
} // name, age

// Direct access of symbol
alert(user[id]);

// Global Symbol
let id = Symbol.for("id"); // get symbol, if there is not, it create it
let idAgain = Symbol.for("id");

alert(id === idAgain); // true

// Getting Global Symbol name
let sym1 = Symbol.for("name");
let sym2 = Symbol.for("id");

alert(Symbol.keyFor(sym1)); // name
alert(Symbol.keyFor(sym2)); // id
*/

// Global VS Local Symbol in getting key
let globalSymbol = Symbol.for("name");
let localSymbol = Symbol("name");

alert(Symbol.keyFor(globalSymbol)); // name
alert(localSymbol.description); // name
