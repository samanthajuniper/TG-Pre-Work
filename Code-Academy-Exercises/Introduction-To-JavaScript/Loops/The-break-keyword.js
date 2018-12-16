const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];

// Write you code below
for (let i = 0; i < rapperArray.length; i++){
  console.log(rapperArray[i]);
  if (rapperArray[i] ===  'Notorious B.I.G.'){
    break;
  }
}
console.log("And if you don't know, now you know.");


/*The keyword "break" can be used to break out of a loop or stop a loop from continuing to execute even though the original stopping condition we wrote for our loop hasn't been met. On lines 6-7 I used the "break" keyword within the if statement to tell the program to stop running if it returns the "rapperArray" element "Notorious B.I.G.". Therefore, the last element, "Tupac", in the "rapperArray" array does not print to the console because the loop stops running once it reaches the third array element. */