// ---------------------------------
// Assignment 2
// ---------------------------------

function baz() {
  console.log('Entering baz().');
  console.log('Exiting baz().');
}
function foo() {
    console.log('Entering foo().');
    console.log('Exiting foo().');
}
function bar();{
    console.log('Entering bar().');
    console.log('Exiting bar().');
}

// ---------------------------------
// Assignment 3
// ---------------------------------

function abc(words, length) {
}

let quote = 'Creativity Is Intelligence Having Fun';
abc(quote,5);

// ---------------------------------
// Assignment 4
// ---------------------------------

let puzzle = 'Gs!kPrAF5tEnA!uan57PtXikd!xThj!Zr';
let puzzleList = puzzle.split("");

// ---------------------------------
// Assignment 5
// ---------------------------------

// ?
function gP(length) {
  // ?
  let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  // ?
  let password = '';
  // ?
  let alphabetList = alphabet.split("");
  // ?
  if (length > alphabet.length) {
    // ?
    length = alphabet.length;
  }
  // ?
  for(i = 0; i < length; i++) {
    // ?
    position = Math.floor(Math.random() * alphabet.length);
    // ?
    password += alphabetList[position];
  }
  // ?
  return password;
}

// ?
let password = gP(10);
// ?
console.log(password);
