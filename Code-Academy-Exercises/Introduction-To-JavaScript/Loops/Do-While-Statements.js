// Write your code below
const cupsOfSugarNeeded = 4;
let cupsAdded = 0;

do {
  cupsAdded = cupsOfSugarNeeded +1;
  cupsAdded++;
} while (cupsAdded < cupsOfSugarNeeded);

console.log(cupsAdded);



/*A do..while loop is the same as a while loop, but it will run at least one time regardless if the stopping condition is met the first time. On lines 5-8 I created while loop that checks if the "cupsAdded" variable has a value that is one higher than the value of the "cupsOfSugarNeeded" variable. The while loop will increment the value of "cupsAdded" by one each time while it is less than the value of "cupsOfSugarNeeded". When the condition evaluates to false, or "cupsAdded" is greater than "cupsOfSugarNeeded", the program will log the value of "cupsAdded" to the console. In this case "6" was logged to the console. */