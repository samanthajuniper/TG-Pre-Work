console.log('First message!');
setTimeout(() => {
   console.log('This message will always run last...');
}, 2500);
console.log('Second message!');


/*JavaScript is an asynchronous language, which allows you to decide when to call functions and how to handle asynchronous events. In order to do this, Javascript uses Event Loops to create a que of functions that execute in a given order. An example of an event loop is shown on lines 1-5. The "setTimeout()" function  will pass a function call to the queue. The following logged to the console: "First message! Second message! This message will always run last..." */