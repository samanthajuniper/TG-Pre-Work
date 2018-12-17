const robot = {
  energyLevel: 100,
  checkEnergy: () => {
    console.log(`Energy is currently at ${this.energyLevel}%.`)
  }
}

robot.checkEnergy();

const robot = {
  energyLevel: 100,
  checkEnergy()  {
    console.log(`Energy is currently at ${this.energyLevel}%.`)
  }
}

robot.checkEnergy();



/*Arrow functions inherently bind, or tie, an already defined "this" value to the function itself that is NOT the calling object. Therefore, I should avoid using arrow functions when using the "this" method. On line 12 I refactored the "checkEnergy" function to eliminate the arrow notation in order for the "this" value on line 13 to work properly. */