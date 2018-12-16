function monitorCount(rows, columns) {
  return(rows * columns);
}

const numOfMonitors = monitorCount(5,4);

console.log(numOfMonitors);



/*The keyword "return" is used to pass back information from the function call or produce an output. On lines 1-3 I defined the function "monitorCount" that had parameters of width and height. When the function is executed it is set to retun the value of the width multiplied by the height. On line 5 I created a constant variable "numOfMonitors" that holds the value of the function "monitorCount" with the arguments of 4 and 5. On line 7 the console will log the value of the executed function, which is 20 (5*4). */