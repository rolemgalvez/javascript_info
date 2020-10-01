/*
// declaring an object
let user1 = new Object(); // object constructor
let user2 = {}; // object literal

// Storing Property in Object
let user3 = {
  name: "Juan", // by key/name/identifier "name" store value "Juan"
  age: 23, // by key "age" store value "23"
};

// Accessing Property Value
alert(user3.name); // Juan
alert(user3.age); // 23

// Adding property on an existing object
user3.isAdmin = true;

// Removing a property
delete user3.age;

// Modifying property a constant object
const user5 = {
  name: "Edwin",
  age: 69,
};

user5.name = "Erick";

alert(user5.name);

// Square Brackets
let user6 = {
  "sample name": "Oscar",
};

user6["like birds"] = true;

alert(user6["like birds"]);
alert(user6["sample name"]);

delete user6["like birds"];

let key = "favorite food";

user6[key] = "banana";

// Flexibility of Square brackets
let user7 = {
  name: "Pedro",
  age: 53,
};

let key = prompt("What do you want to know about the user?", "name");

alert(user7[key]);
alert(user7.key); // undefined

// Computed Properties
let fruit1 = prompt("Which fruit to buy?", "apple");

let bag1 = {
  [fruit1]: 5,
};

alert(bag1.apple);

// same as below

let fruit2 = prompt("Which fruit to buy?", "apple");
let bag2 = {};

bag2[fruit2] = 5;

alert(bag2.apple);

// More complex
let fruit3 = "apple";
let bag = {
  [fruit3 + "Computers"]: 5,
};

alert(bag.appleComputers);
*/

// Property Value Shorthand
function makeUser(name, age) {
  return {
    name: name,
    age, // same as age: age
  };
}

let user = makeUser("Samuel", 45);

alert(`${user.name} is ${user.age} years old`);


