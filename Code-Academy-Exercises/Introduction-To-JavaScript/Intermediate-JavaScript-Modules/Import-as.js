import {aircrafts,flightReqs, meetsStaffReqs, meetsSpeedRangeReqs } from './airplane';

function displayFuelCapacity() {
aircrafts.forEach(function(element){
  console.log('Fuel Capacity of ' + element.name + ': ' + element.fuelCapacity);
  });
}

displayFuelCapacity();

function displayStaffStatus() {
 aircrafts.forEach(function(element) {
   console.log(element.name + ' meets staff requirements: ' + meetsStaffReqs(element.availableStaff, flightReqs.requiredStaff) );
  });
}


displayStaffStatus();

function displaySpeedRangeStatus() { 
 aircrafts.forEach(function(element){
   console.log(element.name + ' meets speed range requirements: ' + meetsSpeedRangeReqs(element.maxSpeed, element.minSpeed, flightReqs.requiredSpeedRange));
  });
}

displaySpeedRangeStatus();




/*When we change the name of variables upon export, they become available to use in the import statment as well. On line 1 I changed the original variable names from the "airplane" module to their aliased names, and then modified the code below to use the aliased variable names instead. */