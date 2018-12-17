const robot = {
  model: '1E78V2',
  energyLevel: 100,
  provideInfo() { 
    return `I am ${this.model} and my current energy level is ${this.energyLevel}.`
  }
};

console.log(robot.provideInfo());



/*The this keyword references the calling object which provides access to the calling object's properties. On line 5 I used the "this" keyword to reference the "robot" object's "model" and "EnergyLevel" properties. On line 9 the following result printed to the console: "I am 1E78V2 and my current energy level is 100." . */