const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

// Something is missing in the method call below

console.log(words.some(word => {
  return word.length < 6;
}));

// Use filter to create a new array
const interestingWords = words.filter((word) => {return word.length > 5});


// Make sure to uncomment the code below and fix the incorrect code before running it

console.log(interestingWords.every((word) => {return word.length > 5}));


/*On line 5 I added the missing callback function to the ".some()" method. On line 10 the ".filter()" method is called on the "words" array to return elements that are more than 5 letters long. On line 15 I added instruction to the "word" callback function to return elements in the "words' array that had more than five characters. */