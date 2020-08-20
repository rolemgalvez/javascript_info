/*
// OR (||)
alert(true || true); // true
alert(true || false); // true
alert(false || true); // true
alert(false || false); // false

// OR with if
if (1 || 0) {
  // 1, sample as (true || false)
  alert("Truthfully!");
}

let hour = 9;
if (hour < 10 || hour > 18) {
  alert("The office is closed.");
}

let hour = 13;
let isWeekend = true;
if (hour < 10 || hour > 18 || isWeekend) {
  alert("The office is closed.");
}
*/

// OR “||” finds the first truthy value. Return last if all are false
alert(1 || 0); // 1
alert(null || 1); // 1
alert(null || 0 || 1); // 1
alert(undefined || null || 0); // 0, because no true left

// Using OR to display name from given inputs
let firstName = "";
let lastName = "";
let nickName = "SuperCoder";
alert(firstName || lastName || nickName || "Anonymous"); // "SuperCoder"
