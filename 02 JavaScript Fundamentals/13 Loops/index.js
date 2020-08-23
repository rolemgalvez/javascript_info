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
*/

// Breaking the loop
let sum = 0;
while (true) {
  let value = +prompt("Enter a number", "");
  if (!value) break;
  sum += value;
}
alert(sum);
