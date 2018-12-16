function makeShoppingList(item1 = 'milk', item2 = 'bread', item3 = 'eggs'){
  console.log(`Remember to buy ${item1}`);
  console.log(`Remember to buy ${item2}`);
  console.log(`Remember to buy ${item3}`);
}

makeShoppingList('oranges');


/*Default parameters allow parameters to have a predetermined value in case there is no argument passed into the function or if the argument is undefined when called. On line 1, the function "makeShoppingList" has default parameters to make the first item "milk", the second item "bread", and the third item "eggs" when the function is called with no specific arguments. On line 7 I called the function and set the first argument equal to "oranges". This overrides the default item of "milk". */