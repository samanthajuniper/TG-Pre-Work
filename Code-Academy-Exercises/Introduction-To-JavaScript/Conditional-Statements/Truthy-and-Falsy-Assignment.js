let tool = '';

tool = 'marker';

// Use short circuit evaluation to assign writingUtensil variable below:
let writingUtensil = tool || 'pen';

console.log(`The ${writingUtensil} is mightier than the sword.`);


/*On line 6 I wrote a short-circuit evaluation using truthy and falsy evaluation and the "or" operator "||". Or statements check the left most condition first, so the "writingUtensil" variable will be assigned the value of the tool "variable" if it is a truthy value. If the "tool" variable is falsy, then "writingUtensil" will take on a value of 'pen'. When tool was reassigned the truth value of "marker" on line 3, the console substituted "marker" into the template literal on line 8. So the console reads: "The marker is mightier than the sword".*\