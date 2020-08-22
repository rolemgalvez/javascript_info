/* 
// Nullish coalescing operator (??) - return which is not a null or undefined among values
let a = null;
let b = "have value";
let x = a ?? b; // returns b because a is null
// this is same as:
x = a !== null && a !== undefined ? a : b;

// another useful example to show first not null/undefined value
let firstName = null;
let lastName = null;
let nickName = "SuperCoder";
alert(firstName ?? lastName ?? nickName ?? "Anonymous"); // SuperCoder

// ?? versus || - important in distinguishing null/undefined from 0
let height = 0;
alert(height || 100); // 100, || returns the first TRUTHY value
alert(height ?? 100); // 0, || returns the first DEFINED value

// Precedence, ?? is 5th (quite low), so carefully use parenthesis if needed
let height = null;
let width = undefined;
let area = (height ?? 100) * (width ?? 50);
alert(area); // 5000
*/

// Limitation of ?? - forbidden to use with && and || for safety reason
let x = 1 && 2 ?? 3; // syntax error
let x = (1 && 2) ?? 3; // use parenthesis as work around
alert(x); // 2
