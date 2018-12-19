import Airplane from './airplane';

function displayFuelCapacity() {
  Airplane.availableAirplanes.forEach(function(element){
  console.log('Fuel Capacity of ' + element.name + ': ' + element.fuelCapacity);
  });
}

displayFuelCapacity();




/*ES6 also has a new way of importing modules. On line 1 the ES6 import syntax is as follows: the keyword "import" begins the statement; then the keyword "Airplane" is the name of the variable to store the default export in; from tells the program where to load the module from; and then the name of the module to load. If a module is stored within a local file, you refer to the name of the file without the extension of the file. Thus, the data and methods from the "airplane" file can now be used within the missonControl file. Specifically, I used the "name" and "fuelCapacity" properties of the "availableAirplanes" module in the function defined on lines 3-7. */