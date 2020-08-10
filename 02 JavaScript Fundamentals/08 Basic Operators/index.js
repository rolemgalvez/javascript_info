/* 
// 5 * 2 -> 5 and 2 are operands, * is the operator
let x = 1;
x = -x; // unary operator because only one operand 
alert(x); // -1

let x = 1,
  y = 3;
alert(x - y); // -2, binary operator because of two operands

// Remainder using %
alert(5 % 4); // 1, remainder of 5 divided by 4
alert(10 % 6); // 4, remainder of 10 divided by 6

// Exponent with **
alert(3 ** 2); // 9, 3 to the second power
alert(49 ** (1 / 2)); // 7, 1/2 is the same as square root
alert(8 ** (1 / 3)); // 2, 1/3 is the same as cube root

// Concatenation with +
let s = "henlo " + "world";
alert(s);

// Automatic conversion to string if one operand is a string
alert("1" + 2); // "12"
alert(3 + "4"); // "34"

// Complex example
let value = 3 + 4 + "5";
alert(value); // 75, first adding 3 & 4 equals 7, then doing 7 + "5" 
*/

// Only + operator do automatic to string concatenation
alert(9 - "7"); // 2, converts 7 to a number
alert("10" / "2"); // 5, converts both the operand into a number
