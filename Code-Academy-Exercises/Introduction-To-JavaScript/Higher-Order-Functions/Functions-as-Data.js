const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
  for(let i = 1; i <= 1000000; i++) {
    if ( (2 + 2) != 4) {
      console.log('Something has gone very wrong :( ');
    }
  }
}

// Write your code below
var is2p2 = checkThatTwoPlusTwoEqualsFourAMillionTimes 

is2p2();

console.log(is2p2.name);


/* On lines 10 and 12 I renamed the function "checkThatTwoPlusTwoEqualsFourAMillionTimes" to "is2p2" without altering its source code. I did this by assigning the origninal function name to a variable with the new, shorter function name. When doing this step it is important to not include quotes around the old function name or it will reassign the orinigal function a new value. I used the ".name" property to test if the new function name actually referenced the orignial function we were trying to rename, and "checkThatTwoPlusTwoEqualsFourAMillionTimes" printed to the console. */