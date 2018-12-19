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

 function meetsSpeedRangeRequirements(maxSpeed, minSpeed, requiredSpeedRange) {
   var range = maxSpeed - minSpeed;
  if (range > requiredSpeedRange) {
    return true
  } else {
    return false
  }
};


export default meetsSpeedRangeRequirements;



/*I used the "export" keyword to export the variables "availableAirplanes", "flightRequirements", and "meetsStaffRequirements" upon delcaration. On line 40 I used the "export default" syntax to export the "meetsSpeedRangeRequirements" variable. */ 