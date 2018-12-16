const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

// Create the secretMessage array below
const secretMessage = animals.map(animal => animal[0]);

console.log(secretMessage.join(''));

const bigNumbers = [100, 200, 300, 400, 500];

// Create the smallNumbers array below
const smallNumbers = bigNumbers.map(num => num/100);

console.log(smallNumbers)


/* When the ".map()" method is called on an array it takes an argument of a callback function and returns a new array.  On line 4 I created a new variable "secretMessage" and passed it a callback function "animal" that returns the first letter of each element in the "animals" array. The console returned: "HelloWorld". */