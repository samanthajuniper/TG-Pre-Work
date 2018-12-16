const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

groceryList.shift();
console.log(groceryList);

groceryList.unshift('popcorn');
console.log(groceryList);

console.log(groceryList.slice(1, 4));

console.log(groceryList);

const pastaIndex = groceryList.indexOf('pasta');
console.log(pastaIndex);


/*Other built-in functions can be used to alter arrays as well. The ".shift()" function removes the first element of an array, while the ".unshift()" function adds an element to the beginning of an array (see lnes 3 & 6). The function ".slice()" allows you to select a portion of an entire array (see line 9), but it does not alter the initial array (i.e. it's a non-mutating function). ".indexOf" can be used to find the index value of an element in an array (see line 13). */