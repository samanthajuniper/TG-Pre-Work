
var pasta = "Spaghetti"; // ES5 syntax

var meat = "Pancetta"; // ES6 syntax

var sauce = "Eggs and cheese"; // ES6 syntax

// Template literals, like the one below, were introduced in ES6
var carbonara = "You can make carbonara with " + pasta + ", " + meat + ", " + " and a sauce made with " + sauce + ".";


var pasta = "Spaghetti"; // ES5 syntax

const meat = "Pancetta"; // ES6 syntax

let sauce = "Eggs and cheese"; // ES6 syntax

// Template literals, like the one below, were introduced in ES6
const carbonara = `You can make carbonara with ${pasta}, ${meat}, and a sauce made with ${sauce}.`;




/*On lines 1-9 I manually translated the ES6 code on lines 12-19 to ES5 code. In ES5 you could only declare a variable using the "var" key word (see lines 2, 4, 6, & 9). In ES5 you could only interpolate variables into strings using a plus sign (see line 9).

/* Three reasons for the update to ES6 include: syntatical similarity to other programming languages so it is easier for experienced, non-JavaScript developers to learn JavaScript; there is improved readability and fewer characters are required to create the same functionality; it mitigates some ES5 bugs. To limit the impact of ES6 browser compatibility issues, Ecma made the new syntax backwards compatible, which means you can map JavaScript ES6 code to ES5.*/