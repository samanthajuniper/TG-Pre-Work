import {availableAirplanes, flightRequirements,  meetsStaffRequirements, meetsSpeedRangeRequirements } from './airplane';

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

function displaySpeedRangeStatus() { 
  availableAirplanes.forEach(function(element){
   console.log(element.name + ' meets speed range requirements: ' + meetsSpeedRangeRequirements(element.maxSpeed, element.minSpeed, flightRequirements.requiredSpeedRange));
  });
}

displaySpeedRangeStatus();



/*Exporting upon declaration does not have an impact on how we import the variables, so the same syntax is maintained (see line 1). */