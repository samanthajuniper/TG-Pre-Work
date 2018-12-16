let wordCount = 5;

if (wordCount) {
  console.log("Great! You've started your work!");
} else {
  console.log('Better get to work!');
}


let favoritePhrase = '';

if (favoritePhrase) {
  console.log("This string doesn't seem to be empty.");
} else {
  console.log('This string is definitely empty.');
}


/*The "wordCount" variable on line 1 is truthy because it has a value assigned to it. Therefore the if statement on lin3 4 will execute. The "favoritePhrase" variable on line 20 is falsy because it is assigned an empty string (or not value), so the else statement on line 15 will execute. */