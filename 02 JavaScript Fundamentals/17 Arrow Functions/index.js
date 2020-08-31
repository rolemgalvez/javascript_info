/* 
let sum = (a, b) => a + b;
// short version for this:
// let sum = function (a, b) {
//   return a + b;
// };
alert(sum(1, 2)); // 3

// Having only one argument
let double = (n) => n * 2;
// same as:
// let double = function(n) { return n * 2; }
alert(double(4)); // 8

// No argument
let sayHi = () => alert("Hello");
sayHi();
*/

// Arrow Function same way as Function Expression
let age = +prompt("How old are you?", 18);

let welcome = age < 18 ? () => alert("Hello!") : () => alert("Greetings!");

welcome();
