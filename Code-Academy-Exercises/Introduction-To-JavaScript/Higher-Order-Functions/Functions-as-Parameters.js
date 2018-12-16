const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
  for(let i = 1; i <= 1000000; i++) {
    if ( (2 + 2) != 4) {
      console.log('Something has gone very wrong :( ');
    }
  }
};

const addTwo = num => num + 2;

const timeFuncRuntime = funcParameter => {
  let t1 = Date.now();
  funcParameter();
  let t2 = Date.now();
  return t2 - t1;
};

// Write your code below

const time2p2 = timeFuncRuntime(checkThatTwoPlusTwoEqualsFourAMillionTimes);

const checkConsistentOutput = (func, val) => {
    let firstTry = func(val);
    let secondTry = func(val);
    if (firstTry === secondTry) {
        return firstTry
    } else {
        return 'This function returned inconsistent results'
    }
};

checkConsistentOutput(addTwo, 10);


/*Functions can be passed into other functions as parameters.  A higher-order function is a function that either accepts functions as parameters, returns a function, or both. Callback functions are functions that get called as arguements during the execution of the higher-order function. On line 22 I created a higher-order function called "checkConsistentOutput" that takes both a function and value as arguments. On line two the same higher order function takes the following arguments: the function "addTwo", which is passed not invoked, and the value "10". We see an example of a callback function on line 11: "timeFuncRuntime" is the higher-order function & "funcParameter" is the callback function.*/