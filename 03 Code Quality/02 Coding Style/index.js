/* 
let n = -1;

if (n < 0) {
  alert(`Power ${n} is not supported`);
}

// Line Length
let str = `
  This is sample paragraph presenting the distribution of long horizontal
  value into a separated context through row partitioning based on your
  preferred division. This is possible with backtick quotes.
`;

if (
  age === 21 &&
  phrase === 'Abra Kadabra Open Sesame' &&
  skill === 'blood lust controller'
) {
  letTheGameBegin();
}

function letTheGameBegin() {
  alert("Let's go!");
}

// Indents (Horizontal & Vertical)
function pow(x, n) {
  let result = 1;

  for (let i = 0; i < n; i++) {
    result *= x;
  }

  return result;
}

// Nesting Levels
// OK
for (let i = 0; i < 5; i++) {
  if (i % 2 == 0) {
    alert("even!");
  }
}
// Better
for (let j = 0; j < 5; i++) {
  if (j % 2 != 0) continue;
  alert("even");
}

// OK
function pow1(x, n) {
  if (n < 0) {
    alert("Negative 'n' not supported");
  } else {
    let result = 1;

    for (let k = 0; k < n; k++) {
      result *= x;
    }

    return result;
  }
}
// Better
function pow2(x, n) {
  if (n < 0) {
    alert("Negative 'n' not supported");
    return;
  }

  let result = 1;

  for (let l = 0; l < n; l++) {
    result *= x;
  }

  return result;
}


// Functions Placement - Code first then function
let sum = calcSum(1, 4);
showName("Juan");
greeting();

function calcSum(n1, n2) {
  return n1 + n2;
}

function showName(name) {
  alert(name);
}

function greeting() {
  alert("Henlo");
}

*/

// TASK: Fixing Bad Style
let x = prompt("x?", "");
let n = prompt("n?", "");

if (n <= 0) {
  alert(`Power ${n} is not supported, 
        please enter an integer number 
        greater than zero`);
} else {
  alert(pow(x, n));
}

function pow(x, n) {
  let result = 1;

  for (let i = 0; i < n; i++) {
    result *= x;
  }

  return result;
}
