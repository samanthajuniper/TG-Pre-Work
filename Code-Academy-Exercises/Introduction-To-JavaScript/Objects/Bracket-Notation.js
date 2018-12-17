let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  'Active Mission' : true,
  homePlanet : 'Earth', 
  numCrew: 5
 };

let propName =  'Active Mission';

// Write your code below

var isActive = spaceship['Active Mission'];
console.log(spaceship, propName);



/*Bracket notation can be used to access a key's value, but it must be used when a key's name includes numbers, spaces, or special characters in them. With bracket notation you can also use a variable inside the brackets to select the keys of an object. On line 12 I used square bracket notation to access the value of "Active Mission" from the spaceship object. On line 13 I used the "propName" variable to log the property value of the key "Active Misson". */