const vacationSpots = ['Bali', 'Paris', 'Tulum'];

// Write your code below
for (let i = 0; i < vacationSpots.length; i++)
  {
    console.log('I would love to visit ' + vacationSpots[i]);
  };

/* On lines 4-7 I looped through the "vacationSpots" array in order to append the string "I would love to visit" to each array element. I set the initializing variable "i" to start counting at the first element of the array, which has a zero-index of 0. Then I told the loop to run as long as "i" is less than the length of the array, so it would stop running when the element number exceeded 2 because there are only 3 array elements. Then I set the iteration statement to add one to each iteration. On line 6 the following results were printed to the console: "I would love to visit Bali I would love to visit Paris I would love to visit Tulum". */