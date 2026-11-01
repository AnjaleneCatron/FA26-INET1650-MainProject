// ---------------------------------
// Assignment 2
// ---------------------------------

function baz() {
  console.log('Entering baz().');
  console.log('Exiting baz().');
}
function foo() {
    console.log('Entering foo().');
    bar();
    console.log('Exiting foo().');
}

foo();

function bar();{
    console.log('Entering bar().');
    console.log('Exiting bar().');
}
// ---------------------------------
// Assignment 3
// ---------------------------------

function abc(words, length) {
    let wordList = words.split(" ");

    for (let i = 0; i < wordList.length; i++) {
        if (wordList[i].length >= length) {
            console.log(wordList[i]);
        }
    }
}

let quote = 'Creativity Is Intelligence Having Fun';

abc(quote, 5);

// ---------------------------------
// Assignment 4
// ---------------------------------

let puzzle = 'Gs!kPrAF5tEnA!uan57PtXikd!xThj!Zr';
let puzzleList = puzzle.split("");
let iCount = 0;

for (let i = 0; i<puzzleList.length; i++) {
    if (i % 5 == 1){
        iCount++;
    }
}

console.log(iCount);
// ---------------------------------
// Assignment 5
// ---------------------------------

// establishing the function gP with a parameter of length
function gP(length) {
  // stores all possible characters in array alphabet
  let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  //  makes empty string to store potential password
  let password = '';
  // creates a new array of all characters in alphabet
  let alphabetList = alphabet.split("");
  // sets the condition that can't be more than the available number of characters
  if (length > alphabet.length) {
    // set the length to the maximum number of characters
    length = alphabet.length;
  }
  // repeats a loop until the required number of characters is reached
  for(i = 0; i < length; i++) {
    // makes a random number fora position in alphabet
    position = Math.floor(Math.random() * alphabet.length);
    // adds the random character to the password
    password += alphabetList[position];
  }
  // return completed password to console
  return password;
}

//  calls function to make a password that's 10 characters long
let password = gP(10);
// displays the new password in console
console.log(password);
