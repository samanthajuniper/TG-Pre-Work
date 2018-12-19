let availableAirplanes = [
{
  name: 'AeroJet',
  fuelCapacity: 800,
  availableStaff: ['pilots','flightAttendants', 'engineers', 'medicalAssistance', 'sensorOperators'],
 }, 
 {name: 'SkyJet',
  fuelCapacity: 500,
  availableStaff:  ['pilots','flightAttendants'],
 }
];

let flightRequirements = {
  requiredStaff: 4,
};

function meetsStaffRequirements(availableStaff, requiredStaff) {
  if(availableStaff.length >= requiredStaff) {
    return true;
  } else {
    return false;
  }
}

export {availableAirplanes, flightRequirements, meetsStaffRequirements };


/*ES6 also has named exports that allow us to export data through the use of variables. On line 25 I used the "export" key word followed by curly braces that hold the variable names I want to export. */