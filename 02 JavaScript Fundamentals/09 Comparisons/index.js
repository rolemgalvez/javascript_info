/*
alert(10 > 9); // true (correct)
alert(1 == 10); // false (wrong)
alert(6 != 9); // true (correct)

let result = 69 == 96;
alert(result); // false

// Letters are compared using JS "dictionary" or"lexicographical" order
alert("Z" > "A"); // true
alert("Hey" < "Hi"); // true
alert("Hello" == "Henlo"); // false
alert("B" > "b"); // false

// Comparison of different types: values converted to numbers
alert("5" > 3); // true
alert("004" == 4); // true
alert(true < false); // false, 1 < 0
alert(true == 1); // true

// Funny Consequence
let a = 0;
let b = "0";

alert(a == b); // true
// Boolean expression use different set of rules
alert(Boolean(a)); // false
alert(Boolean(b)); // true

// Strict Equality (===) which no type conversion - to avoid these kind of problem:
alert(0 == false); // true
alert("" == false); // true
// and have these:
alert(0 === false); // fa3se
alert("" === false); // false

// these is same sense in not equality:
alert(0 != false); // false
alert("" != false); // false
// having string inequality
alert(0 !== false); // true
alert("" !== false); // true

// Comparison with null and undefined
alert(null == undefined); // true
alert(null === undefined); // false
*/

// Equality check == and comparisons > < >= <= work differently
alert(null > 0); // false, in comparisons, null converted to 0
alert(null == 0); // false, in equality check, null is null and undefined is undefined
alert(null >= 0); // true, again, null converted to 0
