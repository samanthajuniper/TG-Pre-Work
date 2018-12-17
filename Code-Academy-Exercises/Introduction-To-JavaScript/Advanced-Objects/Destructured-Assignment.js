const robot = {
  model: '1E78V2',
  energyLevel: 100,
  functionality: {
    beep() {
      console.log('Beep Boop');
    },
    fireLaser() {
      console.log('Pew Pew');
    },
  }
};

const { functionality } = robot;
functionality.beep();


/*The deconstructed assignment shorthand technique allows us to create a variable with the name of an object's key that is wrapped in curly braces {} and assign to it the object. It can also be used for nested properties of an object. I applied the deconstructed assignment technique on line 14 to create a constant variable for the "functionality" property in the "robot" object. I then took that same variable, which is referencing the "functionality" property, and called the "beep()" function to it. */