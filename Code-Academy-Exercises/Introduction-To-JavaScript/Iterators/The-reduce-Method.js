const newNumbers = [1, 3, 5, 7];

const newSum = newNumbers.reduce((accumulator, currentValue) => {
  console.log('The value of accumulator: ', accumulator);
  console.log('The value of currentValue: ', currentValue);
  return accumulator + currentValue;
}, 10);

console.log(newSum);



/*The ".reduce()" method returns a single value after iterating through the elements of an array, which then reduces the array itself. On line 3 I invoked ".reduce()" to the "newNumbers" array, and used a callback funtion that has the parameters "accumlator" and "currentValue". The".reduce()" method iterates through the array the return value of the callback function becomes the accumulator value for the next iteration, currentValue takes on the value of the current element in the looping process. Then the new array takes on the sum of the last two values of the last iteration. On line 9, "16" printed to the console. */                                                               