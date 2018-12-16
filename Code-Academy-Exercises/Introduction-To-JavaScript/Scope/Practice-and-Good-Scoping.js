const logVisibleLightWaves = () => {
  let lightWaves = 'Moonlight';
	let region = 'The Arctic';
  // Add if statement here:
  if(region === 'The Arctic') {
    let lightWaves = 'Northern Lights';
    console.log(lightWaves);
  }
  
  console.log(lightWaves);
};

logVisibleLightWaves();


/*The best practice to avoid scope pollution is to scope variables as tightly as possible using block scope. If a variable does not need to exist outside a block— it shouldn’t. Inside the if block the variable "lightWaves" is declared, and "Northern Lights" is printed to the console within the if block.  Outside the if block, but still within the function, the same statement prints "Moonlight" to the console because it cannot access the locally declared "lightWave" variable. */