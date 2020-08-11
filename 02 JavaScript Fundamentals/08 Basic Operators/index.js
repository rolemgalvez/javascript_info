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

// Only + operator do automatic to string concatenation
alert(9 - "7"); // 2, converts 7 to a number
alert("10" / "2"); // 5, converts both the operand into a number

// Applying + operator on a single value.
let a = 2,
  b = -2;
alert(+a); // 2
alert(+b); // -2 -> Nothing happens if use in a number

// + operator converts non-numbers. Just same as Number() do
alert(+true); // 1
alert(+""); // 0

// Useful when getting an input which is default to string
let apple = "2",
  orange = "3";
alert(apple + orange); // "23"
alert(+apple + +orange); // 5
alert(Number(apple) + Number(orange)); // 5

// Operator Precedence:
// (left to right),
// unary plus (+),
// unary negation (-),
// exponentiation (**),
// multiplication (*),
// division (/),
// addition (+),
// subtraction (-),
// assignment (=)

// Sample complex expression:
let a = 1,
  b = 2;
c = 3 - (a = b + 1);
alert(a); // 3
alert(c); // 0

// Chaining assignments
let a, b, c;
a = b = c = 2 + 2;
alert(a); // 4
alert(b); // 4
alert(c); // 4

// Modify in place
let n = 2;
n += 5; // 7, same as n = n + 5
n *= 2; // 14, same as n = n * 2
alert(n); // 14

// Rule of precedence also apply
let n = 4;
n *= 3 + 5; // 32, same as n *= (3 + 5)
alert(n);

// Increment/Decrement - only used on variable not on a number
let counter = 3;
counter++; // 4, same as counter += 1
alert(counter);
counter--; // 3, same as counter -= 1
alert(counter);

// Prefix Increment
let counter = 2;
let a = ++counter; // ++counter returns NEW value of counter to a
alert(`counter = ${counter}; a = ${a}`); // counter = 3; a = 3

// Postfix Increment
let counter = 2;
let a = counter++; // counter++ returns OLD value of counter to a
alert(`counter = ${counter}; a = ${a}`); // counter = 3; a = 2
*/

// Postfix VS Prefix Increment
let counter = 0;
alert(++counter); // 1, Prefix to use new value immediately
counter = 0;
alert(counter++); // 0, Postfix to use the old value and later the new value
