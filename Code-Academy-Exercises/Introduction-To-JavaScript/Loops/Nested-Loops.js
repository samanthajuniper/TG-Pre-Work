// Write your code below
const bobsFollowers = ['Freddy', 'Brian', 'Roger', 'John'];
const tinasFollowers = ['Sam', 'Roger', 'Freddy'];
const mutualFollowers = [];

for (let i = 0; i < bobsFollowers.length; i++) {
  for (let j = 0; j < tinasFollowers.length; j++) {
    if (bobsFollowers[i] === tinasFollowers[j]) {
      mutualFollowers.push(bobsFollowers[i]);
    }
  }
};

console.log(mutualFollowers);


/*A loop running inside another loop is called a nested loop. For each round of the outer For Loop runs, the inner For Loop runs through completely. A nested loop can be used to compare elements in two arrays. On line 6 I created a loop to go through each of the elements in the "bobsFollowers" array. Within this loop, I created a second loop on line 7 to go through th elements in the "tinasFollowers" array. On lines 8 & 9 I created an if statement that says if an element in "bobsFollowers" array matches any elements from the "tinasFollowers" array, that those elements should be stored in the "mutualFollowers" variable. On line 14 I logged the "mutualFollowers" variable to the console, which resulted in [ 'Freddy', 'Roger' ] being printed. */