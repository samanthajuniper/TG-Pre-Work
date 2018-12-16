const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

// Iterate over fruits below
fruits.forEach(fruit => console.log(`I want to eat a ${fruit}.`))



/*The ".forEach()" method executes the same code for each array element. On line 4 I applied the ".forEach()" method the the array "fruits". ".forEach" took a callback function "fruit" as an argument. The ".forEach()" method then loops through the array and appends the string "I want to eat a" to each element. Then it logs the results to the console: "I want to eat a mango. I want to eat a papaya. I want to eat a pineapple. I want to eat a apple.". */