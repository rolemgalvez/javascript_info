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
*/

let hour = 13;
let isWeekend = true;
if (hour < 10 || hour > 18 || isWeekend) {
  alert("The office is closed.");
}
