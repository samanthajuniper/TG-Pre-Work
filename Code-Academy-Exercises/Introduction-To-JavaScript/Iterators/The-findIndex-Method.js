const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

const foundAnimal = animals.findIndex(animal =>{
  return animal === 'elephant';
})

const startsWithS = animals.findIndex(animal =>{
  return animal[0] === 's';
})

console.log(foundAnimal);
console.log(startsWithS);



/* Calling .findIndex() on an array will return the index of the first element that evaluates to true in the callback function. If there isn't a single element in the array that satisfies the condition in the callback, then .findIndex() will return -1. On line 3 I used the ".findIndex()" method to find the location of the element in the "animals" array that matched the string 'elephant', and line 11 printed "7" to the console which means that "elephant" is the  8th array item. */