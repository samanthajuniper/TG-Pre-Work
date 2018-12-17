const robot = {
  _model: '1E78V2',
  _energyLevel: 100,
  get energyLevel(){
    if(typeof this._energyLevel === 'number') {
      return 'My current energy level is ' + this._energyLevel
    } else {
      return "System malfunction: cannot retrieve energy level"
    }
  }
};

console.log(robot.energyLevel);




/*Getters are methods that get and return the internal properties of an object. It is important to make sure that getter methods have a different name from properties, else calling the method will result in an infinite call stack error. On line 4 I declared a "get" method called "energyLevel" that checks if the property "_energyLevel" is a number or not. On line 13 I called the get method on the "robot" object and the following logged to the console: "My current energy level is 100". */