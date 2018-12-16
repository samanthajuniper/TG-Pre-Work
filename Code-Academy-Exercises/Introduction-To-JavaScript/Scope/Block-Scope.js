function logVisibleLightWaves() {
  const lightWaves = 'Moonlight'
  console.log(lightWaves);
};

logVisibleLightWaves();
console.log(lightWaves);



/* A variable defined inside a block is only accessible to the code within the curly braces {}. These are called local variables because they cannot be used outside the block they are defined in. The the value of the constant variable "lightWaves" cannot be printed to the console because it is a local variable that was defined within the block inside the function "logVisibleLightWaves()" (see lines 2 & 6). */