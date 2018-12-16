let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];

const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];

condiments[0] = 'Mayo';
console.log(condiments);

condiments = ['Mayo'];
console.log(condiments);

utensils[3] = 'Spoon';
console.log(utensils);

utensils = ['Spoon'];

/* Both elements in an array and the array itself declared with a "let" variable can be changed. However, only elements within an array defined by a "const" variable can be changed. On lines 5 & 8 I was able to change both an element of an array and the array itself for the "let" declared variable on line 1. On line 11 I successfully changed an element within an array from a "const" variable. But I was not able to change the entire array itself; on line 14 I recieved an error message when I tried to reassign the "const" variable's array. */