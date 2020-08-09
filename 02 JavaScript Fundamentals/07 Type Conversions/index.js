/*
// String Conversion
let value = true;
alert(typeof value); // boolean

value = String(value);
alert(typeof value); // string


// Numeric Conversion
let automaticNumberConverted = "3" / "4";
alert(typeof automaticNumberConverted); // number

let str = "123";
alert(typeof str); // string

let num = Number(str);
alert(typeof num); // number

alert(`Conversion of "undefined" value to "number": ${Number(undefined)}`); // NaN
alert(`Conversion of "null" value to "number": ${Number(null)}`); // 0
alert(`Conversion of "boolean (true)" value to "number": ${Number(true)}`); // 1
alert(`Conversion of "boolean (false)" value to "number": ${Number(false)}`); // 0
alert(
  `Conversion of "string (empty)" value to "number": ${Number("        ")}`
); // 0
alert(
  `Conversion of  "string (with space at start and end)" value to "number": ${Number(
    "    232    "
  )}`
); // 232
alert(
  `Conversion of  "string (with space in between)" value to "number": ${Number(
    "    2 3 2    "
  )}`
); // NaN
alert(
  `Conversion of  "string (with non number)" value to "number": ${Number(
    "123henlo"
  )}`
); // 232

// Boolean: empty values (empty string, 0, null, undefined, NaN) becomes false, others becomes 1.
alert(Boolean(1)); // true
alert(Boolean(0)); // false

alert(Boolean("henlo")); // true
alert(Boolean("")); // false
*/

// non-empty strings are all true
alert(Boolean("0")); // 0 is a string here not a number so it's true
alert(Boolean(" ")); // not an empty string so it's true
