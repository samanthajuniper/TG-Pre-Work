const satellite = 'The Moon';
const galaxy = 'The Milky Way';
let stars = 'North Star';

const callMyNightSky = () => {
  stars = 'Sirius';
	return 'Night Sky: ' + satellite + ', ' + stars + ', ' + galaxy;
};

console.log(callMyNightSky());
console.log(stars);


/* Having too many global variables can cause problems in a program. Global variables declared in our code are stored in the global namespace, and too many of them can contribute to scope pollution. Scope pollution makes it difficult to keep track of our different variables and sets us up for error. It's best practice to not define variables in the global scope if possible. On line 6 the local variable "stars" was reassigned the value of "Sirius", when we intended for it to be globally assigned the value of "North Star" on line 3. */