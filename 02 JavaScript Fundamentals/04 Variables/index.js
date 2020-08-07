let message = "juan do";
let ageNgTao = 9; // applying camelCasing
let nameNaTripLang = message;
// valid variable names $ and _
let $ = 3;
let _ = 4;

alert(message);
alert(nameNaTripLang);
alert($ + _);

// Declaring variable without "use strict"
num = 5;
alert(num);

// Error with "use strict"
("use strict");
num = 5;
alert(num);

// Declaring constants variable (cannot be changed)
const myBirthday = "01.29.2020";
alert(myBirthday);

// Utilizing constants declaration to hard to remember values
const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";

// Picking now a color
var color = COLOR_BLUE;
alert(color);

// NOTE: capital-named constants are only used as aliases for “hard-coded” values.

// TASK 1
let admin, name;
name = "John";
admin = name;
alert(admin);

// TASK 2
let planetName = "Earth";
let newVisitor;

// TASK 3
const BIRTHDAY = "02.20.2020"; // hard-coded so it's all upper case letters variable constant
const age = someCode(BIRTHDAY); // age is not known prior to code execution, so it's better to be lower case letters variable constant
