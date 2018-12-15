let isLocked = false;

isLocked ? console.log('You will need a key to open the door.') : console.log('You will not need a key to open the door.');

let isCorrect = true;

isCorrect ? console.log('Correct!') :
console.log('Incorrect!');


let favoritePhrase = 'Love That!';

favoritePhrase === 'Love That!'? console.log('I love that!') : console.log("I don't love that!");



/* Ternary operators allow us to write if..else statements in shorthand. On lines 7 through 8, the ternary operastor shorthands the if else statement as follows: the variable "isCorrect" is listed first as the condition to evaluate if its value is true or false; the ? is the ternary operator that separates the condition from the if and else expressions; the if expression is listed first; the else expression is separated by a colon and listed second. In this example, "isCorrect" has a value of "true", so "Correct!" is logged to the console. */