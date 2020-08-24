/* 
// while loop
let i = 0;
while (i < 3) {
  // shows 0, then 1, then 2
  alert(i);
  i++;
}

// while convert expression or variable into boolean
let i = 3;
while (i) {
  alert(i);
  i--;
}

// for loop, curly braces is not required for single line content in body
let i = 3;
while (i) alert(i--);

// do...while - first run in the body, then check condition if execute it again
let i = 0;
do {
  alert(i);
  i++;
} while (i < 3);

// for loop with inline variable declaration
for (let i = 0; i < 3; i++) {
  // (begin; condition; step);
  alert(i);
}

// Skipped parts
let i = 0;
for (i = 0; i < 3; i++) {
  alert(i); // 0, 1, 2
}
alert(i); // 3

let i = 0;
for (; i < 3; ) {
  alert(i++); // 0, 1, 2
}

// removing anything to create infinite loop
for (;;) {
  alert("hello");
}

// Breaking the loop
let sum = 0;
while(true) {
  let value = +prompt("Enter a number", "");
  if (!value) break;
  sum += value;
}
alert(sum)

// Continue to next iteration
for (let i = 0; i < 9; i++) {
  if (i % 2 == 0) continue; // skip current iteration if condition is true
  alert(i); // printing only odd numbers -> 1, 3, 5, 7, 9
}

// Not using break/continue after the ? operator
for (let i = 0; i < 9; i++) {
  (i % 2 == 0) ? alert(i) : continue; // syntax
}

// Label for breaking/continuing in a nested loop
sampleLabel: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    let input = prompt(`Value at coordinates (${i}, ${j})`, "");

    // if empty or cancelled, break out of the both loops
    if (!input) break sampleLabel;

    // do something with the value
  }
}
alert("Done!");

// TASK 1: Last loop value
let i = 3;
while (i) {
  alert(i--); // 1, it's the last value to alert
}

// TASK 2: Which values does the while loop show?
// The prefix form ++i
let i = 0;
while (++i < 5) alert(i); // 1, 2, 3, 4
// The postfix form ++i
let i = 0;
while (i++ < 5) alert(i); // 1, 2, 3, 4, 5

// TASK 3: Which values get shown by the "for" loop?
// The postfix form:
for (let i = 0; i < 5; i++) alert(i); // 0, 1, 2, 3, 4
// The prefix form:
for (let i = 0; i < 5; ++i) alert(i); // 0, 1, 2, 3, 4
*/

// TASK 4: Output even numbers in the loop
for (let i = 2; i <= 10; i++) {
  if (i % 2 == 0) {
    alert(i);
  }
}
