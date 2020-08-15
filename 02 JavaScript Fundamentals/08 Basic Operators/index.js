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

// Postfix VS Prefix Increment
let counter = 0;
alert(++counter); // 1, Prefix to use new value immediately
counter = 0;
alert(counter++); // 0, Postfix to use the old value and later the new value

// Increment/decrement among other operators
let counter = 1;
alert(3 * ++counter); // 6

let counter = 1;
alert(3 * counter++); // 3, because counter++ returns OLD value

// Bitwise Operators: AND (&), OR (|), XOR (^), NOT(~), Shift Left (<<), Shift Right (>>)
let n1 = 3;
let n2 = 4;
alert(`${n1} = ${n1.toString(2)}; ${n2} = ${n2.toString(2)};`); // Convert decimal to binary

// AND (&): Both should be 1, otherwise 0
let n1 = 3; // 011 or 11
let n2 = 6; // 110
alert(n1.toString(2) & n2.toString(2)); // 010 or 10
alert(n1 & n2); // 2

// OR (|): If there's 1, then 1, otherwise 0
let n1 = 4; // 100
let n2 = 6; // 110
alert(n1.toString(2) | n2.toString(2)); // 110
alert(n1 | n2); // 6

// Exclusive OR/XOR (^): There's only be single 1 to be resulted to 1, otherwise 0
let n1 = 4; // 100
let n2 = 6; // 110
alert(n1.toString(2) ^ n2.toString(2)); // 010 or 10
alert(n1 ^ n2); // 2

// NOT (~): formula is x = -(x+1)
let n = 5; // 101
alert(~n.toString(2)); // -102 <= -(101+1)
alert(~n); // -6 <= -(5+1)

// Using Bitwise for permission: Example - Read, Write, Delete
let givenPermissionToPerson = 5; // 101

let ReadPermission = 4; // 100
let WritePermission = 2; // 010
let DeletePermission = 1; // 001

alert(givenPermissionToPerson & ReadPermission); // 4, means equal to ReadPermission
alert(givenPermissionToPerson & WritePermission); // 0, means NOT equal to WritePermission
alert(givenPermissionToPerson & DeletePermission); // 1, means equal to DeletePermission

// Shift Right (>>) - shifting binary values to right (causing removal of values)
alert(8 >> 2);
// 1000 (binary) >> 2 (move 2 place to right)
// 10 (binary) or 2 (decimal) - leaving 10 after shifting to right

// Shifting Left (<<) : shifting values to left (causing adding of 0) or making decimal value exponential to 2s
alert(8 << 2);
// 1000 (binary) << 2 (move 2 place to left)
// 100000 (binary) or 32 (decimal) - adding two 0s at the right
*/

// Using Shifting on colors
// FF3300 => RGB - 24bits values, 8bits Red, 8bits Green, 8bits Blue
// To get GREEN value, shift right by 8 & use AND by 11111111 (255)
// 111111110011001100000000 >> 8 = 1111111100110011
// 1111111100110011 &
// 0000000011111111 =
//         00110011
// So the GREEN value is 00110011

let color = 0xff3300; // how to call a hexadecimal value in JS
let noBlue = color >> 8;
let green = noBlue & 255;
alert(`${green}: ${green.toString(2)}`); // 51: 110011
alert(`GREEN in ${color.toString(16)} is ${green.toString(16)}`); // 33
