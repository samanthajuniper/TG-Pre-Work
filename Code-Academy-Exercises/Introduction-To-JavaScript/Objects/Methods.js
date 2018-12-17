let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';

// Write your code below

let alienShip = {
  retreat() {
    console.log(retreatMessage)
  },
  takeOff() {
    console.log('Spim... Borp... Glix... Blastoff!')
  }
};

alienShip.retreat();

alienShip.takeOff();



/* A method is when a function is stored on an object. On lines 5-12 incorporated two methods within the "alienship" object. The syntax is as follows: methodName() {function instructions};. In order to invoke a function declared within an object literal, you first write the object's name followed by the dot operator followed by the method name (see lines 14 & 16). */