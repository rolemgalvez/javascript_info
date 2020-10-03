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

// Property Value Shorthand
function makeUser(name, age) {
  return {
    name: name,
    age, // same as age: age
  };
}

let user = makeUser("Samuel", 45);

alert(`${user.name} is ${user.age} years old`);

// Reserved words can use inside the object
let obj = {
  for: 1,
  let: 2,
  return: 3,
};

alert(obj.for + obj.let + obj.return); // 6

// Other types converted to string
let obj1 = {
  0: "sample", // "0": "henlo"
};

alert(obj1["0"]); // "sample"
alert(obj1[0]); // "sample"

// Checking if a property exist in an object
let obj2 = {
  name: "Samuel",
  age: 34,
  interest: undefined,
};

alert(obj2.noSuchProperty === undefined); // true

// in operator to check even the value of a key is undefined
alert(obj2.interest === undefined); // true, it exist but the value is undefined
alert("interest" in obj2); // true, the property really exist

// for...in
let user7 = {
  name: "Sanchez",
  age: 23,
  isAdmin: true,
};

for (let key in user7) {
  let value = user7[key]; // value pair of key
  alert(`${key}: ${value}`);
}

// keys that are number are sorted, others are creation order
let countryCodes = {
  49: "Germany",
  41: "Switzerland",
  44: "Great Britain",
  age: 34,
  1: "USA",
};

for (let code in countryCodes) {
  alert(code); // 1, 41, 44, 49, age
}

// Math.trunc function to remove decimal part - checking for integer property
alert(String(Math.trunc("41"))); // 41, same as "41", integer property
alert(String(Math.trunc("+41"))); // 41, not same as "+41", not integer property
alert(String(Math.trunc("1.2"))); // 1, not same as "1.2", not integer property


// Task 1: Hello Object
let user = {};
user.name = "John";
user.surname = "Smith";
user[name] = "Pete";
delete user.name;

// Task 2: Check for emptiness
function isEmpty(obj) {
  let ctr = 0;

  for (let key in obj) {
    ctr++;
  }

  return ctr == 0 ? true : false;
}

let schedule = {};

alert(isEmpty(schedule)); // true

schedule["8:30"] = "get up";

alert(isEmpty(schedule)); // false

// Task 3: Sum object properties
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

let sum = 0;

for (let key in salaries) {
  sum += salaries[key];
}

alert(sum);

// Task 4: Multiply numeric properties by 2
function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] == "number") {
      obj[key] *= 2;
    }
  }
}

let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};

multiplyNumeric(menu);

for (let key in menu) {
  alert(`${key}: ${menu[key]}`);
}

*/
