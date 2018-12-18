var pasta = "Spaghetti"; // ES5 syntax

const meat = "Pancetta"; // ES6 syntax

let sauce = "Eggs and cheese"; // ES6 syntax

// Template literals, like the one below, were introduced in ES6
const carbonara = `You can make carbonara with ${pasta}, ${meat}, and a sauce made with ${sauce}.`;






/*Lines 1-8 contain ES6 syntax that is not universally recognized by out of date browsers. If you try to run this code in an out of date browser, you will recieve errors. */

/*Developers face the problem of addressing the gap between the new JavaScript syntax  and the JavaScript syntax that web browsers recognize. The newest version of JavaScript (ES6) was released in 2015, but ES6 was not supported by most web browsers, so developers ran into browser compatibility issues. The "caniuse.com" website is a useful resource that provides data on web browser compatibility for HTML, CSS, and JavaScript features. Another reource is Babel, a JavScript library you can use to convert new, unsupported JavaScript (ES6), into an older version (ES5) that is recognized by most modern browsers. */