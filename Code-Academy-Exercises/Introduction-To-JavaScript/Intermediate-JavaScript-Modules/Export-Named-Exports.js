export let availableAirplanes = [
{
  name: 'AeroJet',
  fuelCapacity: 800,
  availableStaff: ['pilots','flightAttendants', 'engineers', 'medicalAssistance', 'sensorOperators'],
  maxSpeed: 1200,
  minSpeed: 300,
 }, 
 {name: 'SkyJet',
  fuelCapacity: 500,
  availableStaff:  ['pilots','flightAttendants'],
  maxSpeed: 800,
  minSpeed: 200,
 }
];

export let flightRequirements = {
  requiredStaff: 4,
  requiredSpeedRange: 700,
};

export function meetsStaffRequirements(availableStaff, requiredStaff) {
  if(availableStaff.length >= requiredStaff) {
    return true;
  } else {
    return false;
  }
}

export function meetsSpeedRangeRequirements(maxSpeed, minSpeed, requiredSpeedRange) {
   var range = maxSpeed - minSpeed;
  if (range > requiredSpeedRange) {
    return true
  } else {
    return false
  }
};


/*Named exports can be exported as soon as they are declared using the "export" keyword; this replaces the "export" statement I've been using at the bottom of my files in this section. On lines 1, 17, 22, & 30 I used the keyword "export" in front of each declared variable and function in order to export them as soon as they are declared. */