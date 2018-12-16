const cards = ['diamond', 'spade', 'heart', 'club'];

// Write your code below
let currentCard;

while ( currentCard != 'spade') {
  currentCard = cards[Math.floor(Math.random() * 4)];
	console.log(currentCard);
}


/*While loops are great for circumstances in which we do not know how many times a loop should run. I created a while loop on lines 6-9 that does the following: after the key word "while" I set the loop to stop once it reaches a value of "spade"; then I ran a line of code that generated a random number from 0 to 3 that is assigned to an index number of an element in the "cards" array. The while loop will continue to run until it is assigned the value of "spade". In this case, the console showed that the program recieved the value of "heart" before it stopped at "spade". */ 