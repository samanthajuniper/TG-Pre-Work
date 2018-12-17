const robot = {
  _model: '1E78V2',
  _energyLevel: 100,
  _numOfSensors: 15,
  get numOfSensors(){
    if(typeof this._numOfSensors === 'number'){
      return this._numOfSensors;
    } else {
      return 'Sensors are currently down.'
    }
  },
  set numOfSensors(num) {
    if (typeof num === 'number' && num >= 0){
      this._numOfSensors = num;
    } else {
      console.log('Pass in a number that is greater than or equal to 0')
    }   
  } 
};

robot.numOfSensors = 100;
console.log(robot.numOfSensors);


/*Setters reassign values of existing properties within an object. On lines 12-19 I wrote a setter method called "numOfSensors" that has a parameter of "num". The method checks if "num" is a number and if it is greater than or equal to 0. If these conditions are met then the property "_numOfSensors" will be reassigned the value of "num". On line 21 I assigned the set method a value of "100", which resulted in the property "_numofSensors" being reassigned a new value of "100" because it is both a number and greater than 0. */