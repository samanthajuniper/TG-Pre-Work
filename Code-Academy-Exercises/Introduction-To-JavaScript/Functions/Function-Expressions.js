const plantsNeedWater = function(day){
  if (day === 'Wednesday') {
    return true;
  } else {
    return false;
  }
};

plantsNeedWater('Tuesday');

console.log(plantsNeedWater('Tuesday'));



/* A function expression is used to define a function within a variable. On lines 1-7 the constant variable "plantsNeedWater" contains a function expression. The anonymous function takes a parameter of "day" and executes an if else statement. Function expressions cannot be hoisted or called without first being defined. */