let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  homePlanet : 'Earth',
  color: 'silver',
  'Secret Mission' : 'Discover life outside of Earth.'
};

// Write your code below
spaceship.color = 'glorious gold';
spaceship.numEngines = 5;
delete spaceship['Secret Mission'];



/*Objects can be changed or updated after they have been created. Existing properties wihin an object can be reassigned a new value (see line 9), and new properties can be added to an object too (see line 10). On line 11 I used the "delete" operator to remove the "Secret Mission" property from the "spaceship" object. */