const Airplane = require('./1-airplane.js')

function displayAirplane() {
  console.log(Airplane.myAirplane);
}

displayAirplane();


/*The "require()" function allows us to import a module that we want to use, and it takes the module's filepath as a parameter. On line 1 I used the "require()" function and set its parameter to the file location of the "1-airplane" file in order to import it to the "missonControl" file (see line 1). On lines 3-5 I then defined a function that logs the "myAirplane" property from the "1-airplane" file. On line 7 I invoked the same function, and "StarJet" logged to the console. */