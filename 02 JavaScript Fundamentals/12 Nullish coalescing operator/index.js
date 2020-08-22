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
*/


