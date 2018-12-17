const robot = {
  model: 'SAL-1000',
  mobile: true,
  sentient: false,
  armor: 'Steel-plated',
  energyLevel: 75
};

// What is missing in the following method call?
const robotKeys = Object.keys(robot);

console.log(robotKeys);

// Declare robotEntries below this line:
const robotEntries = Object.entries(robot)
console.log(robotEntries);

// Declare newRobot below this line:
const newRobot = Object.assign({laserBlaster: true, voiceRecognition: true}, robot);

console.log(newRobot);


/*On line 10 I used the built-in method "Object.keys()" to create an array containing the property names within the "robot" object. On line 15  I used the built-in method "Object.entries()" to create an array that holds property names and values from the "robot" object. On line 19 I used the built-in method "Object.assign()" to assign new properties to create a new object that includes the properties in the "robot" object without mutating "robot" itself. */