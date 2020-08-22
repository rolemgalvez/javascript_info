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
*/

// do...while - first run in the body, then check condition if execute it again
let i = 0;
do {
  alert(i);
  i++;
} while (i < 3);
