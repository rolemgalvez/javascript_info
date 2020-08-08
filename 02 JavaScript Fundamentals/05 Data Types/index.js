/*
// Dynamically Typed
let message = "henlo";
message = 123;
alert(message);

alert(1 / 0); // Infinity - greater than any number
alert(Infinity);

alert("hehe" / 2); // NaN - represents computational error
alert("haha" / 1 + 1); // NaN propagates to whole result

const bigInt = 1234567890123456789012345678901234567890n; // declaring BigInt number for numeric values greater than ±((2^53)-1) by adding n in number values
alert(bigInt);

let name = "Juan"; // string can be Single or Double quotes
let sentence = `Hi! My name is ${name} and ${6 + 9} is my favorite number`; // Backticks are extended functionality to embed variable and expressions
alert(sentence);

let yes = true;
let no = false;

let isGreater = 4 > 5;
alert(isGreater); // true or false

let age = null; // nothing, empty, or unknown
alert(age);

let age;
let name = "Pedro";
name = undefined; // not recommended. undefined is mainly use for variable with no value
alert(`${age}, ${name}`); // undefined

// typeof x OR typeof(x) : for checking data type
//
alert(typeof "henlo"); // string
alert(typeof undefined); // undefined
alert(typeof 0); // number
alert(typeof 10n); // bigint
alert(typeof true); // boolean
alert(typeof Symbol("id")); // symbol
alert(typeof Math); // object
alert(typeof null); // object -> recognized error of typeof. Definitely, null is not an object
alert(typeof alert); // function

