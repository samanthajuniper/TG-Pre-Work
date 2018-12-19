let Airplane = {};

module.exports = {
  myAirplane: "CloudJet",
  displayAirplane: function() {
    return this.myAirplane;
  }
};

const Airplane = require('./2-airplane.js');

console.log(Airplane.displayAirplane());



/*Objects can also be exported as modules using "module.exports". On line 3-8 I created an object using the "module.exports" statement, which exposes the current module as an object within the "2-airplane.js" file. Then within the "missionControl.js" file I used the "require()" function to import a function defined within the "Airplane" module from the separate "2-airplane.js" file (see line 10 & 12). */