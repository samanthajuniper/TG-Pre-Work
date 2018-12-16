const city = 'New York City'

function logCitySkyline() {
  let skyscraper = 'Empire State Building';
  return 'The stars over the ' + skyscraper + ' in ' + city;
};

console.log(logCitySkyline());


/*A block is the code found inside a set of curly braces--they allow us to group one or more statements together. The variable "New York City" is defined outside of the "logCitySkyline()" function, while the "skyscraper" variable is defined in the block within the function. The "logCitySkyline()" function is able to access both variables. */