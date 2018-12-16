const concept = ['arrays', 'can', 'be', 'mutated'];

function changeArr(arr){
  arr[3] = 'MUTATED';
}

changeArr(concept);

console.log(concept);

function removeElement(newArr) {
  	newArr.pop();
}

removeElement(concept);

console.log(concept);


/*When you pass an array into a function, if the array is mutated inside the function, that change will take effect outside the function as well. This process is referred to as "pass-by-reference" because we're passing the function a reference to where the variable memory is stored and then changing the memory. On lines 3-5 the "changeArr" function that will assign the third element of the "concept" array a new value of "MUTATED". On line 7 the function "changArr" was called with an argument of "concept", and line 8 prints this result to the console: "[ 'arrays', 'can', 'be', 'MUTATED' ]". On lines 11-13 I changed the initial "concept" array using the built-in function ".pop()" to remove the last element in the "concept" array. The main take away here is that the changes made to the array within the two functions were maintained outside of those functions as well. */