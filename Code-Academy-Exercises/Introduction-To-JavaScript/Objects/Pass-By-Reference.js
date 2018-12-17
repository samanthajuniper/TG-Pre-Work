let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  homePlanet : 'Earth'
};

// Write your code below

let greenEnergy = obj => {
  obj['Fuel Type'] = 'avocado oil';
}

let remotelyDisable = obj => {
  obj.disabled = true;
}

greenEnergy(spaceship);

remotelyDisable(spaceship);

console.log(spaceship)



/*Objects are passed by reference, which means when we pass a variable assigned to an object into a function as an argument, the computer interprets the parameter name as pointing to the space in memory holding that object. If a function changes an object property, then the object itself gets mutated, or permanently changed. This is true even if that object is assigned to a "const" variable. On lines 8-10 and 12-14 I passed objects the funtions that changed the properties of the "spaceship object". I confirmed that these changes mutated the original "spaceship" object when these results printed to the console: { 'Fuel Type': 'avocado oil', homePlanet: 'Earth', disabled: true }. */