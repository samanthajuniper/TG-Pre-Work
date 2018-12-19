const Airplane = {};
Airplane.availableAirplanes = [
  {name: 'AeroJet',
   fuelCapacity: 800,
   },
  {
  name: 'SkyJet',
  fuelCapacity: 500,
  }
];

export default Airplane;



/*The ES6 version of JavaScript uses the "export default" syntax allows us to export one module per file, just as the "module.exports" ES5 syntax does. On line 12 I used "export default" to export the "Airplane" module on lines 1-10. */ 