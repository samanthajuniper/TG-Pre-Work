import {availableAirplanes, flightRequirements,  meetsStaffRequirements} from './airplane';

function displayFuelCapacity() {
availableAirplanes.forEach(function(element){
  console.log('Fuel Capacity of ' + element.name + ': ' + element.fuelCapacity);
  });
}

displayFuelCapacity();

function displayStaffStatus() {
  availableAirplanes.forEach(function(element) {
   console.log(element.name + ' meets staff requirements: ' + meetsStaffRequirements(element.availableStaff, flightRequirements.requiredStaff) );
  });
}


displayStaffStatus();


/*ES6 also has named imports that allow us to import data through the use of variables. On line 1 I used the "import" keyword to import the variables "availableAirplanes", "flightRequirements", and "meetsStaffRequirements" from the "airplane" file. Then on lines 11-15 I created a function that used methods from the "airplane" file that I imported on line 1. */