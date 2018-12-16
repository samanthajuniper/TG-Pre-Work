let season = 'summer';

if (season === 'spring') {
  console.log('It\'s spring! The trees are budding!');
} else if (season === 'winter') {
  console.log('It\'s winter! Everything is covered in snow.');
} else if (season === 'fall') {
  console.log('It\'s fall! Leaves are falling!');
} else if (season === 'summer') {
  console.log('It\'s sunny and warm because it\'s summer!');
} else {
  console.log('Invalid season.');
}


/* else if statements allow you to add more than two possible outcomes to an if..else statement. These statements are evaluated from top to bottom, so the first statement to evaluate "true" gets executed. On lines 5-13 there are a series of else if statements following an initial if else statement. Lines 3 through 8 pose conditions that are false, since the "season" variable does not have a value of "spring", "winter" or "fall". When the computer reads the else if statement on line 9, it evaluates true since "season" has a value of "summer", and prints "It's sunny and warm because it's summer!" to the console. The final else statement on line 11 comes after the true statement, so it is not executed. */