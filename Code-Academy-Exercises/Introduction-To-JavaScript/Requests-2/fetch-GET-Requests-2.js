fetch('https://api-to-call.com/endpoint').then(response => {
  if (response.ok) {
    return response.json();
  }
  throw new Error('Request failed!');
}, networkError => {
  console.log(networkError.message);
}).then(jsonResponse => {
  return jsonResponse;
});



/*In the code above I recreated hte boilerplate code for the GET request using the "fetch()" function.  The "fetch()" function takes a URL as an argument, which determines the endpoint of the GET request. I then chained the "then()" function to the end of "fetch()", which will only run if the promise has been fulfilled by "fetch()". The first argument of the second method is the success callback arrow function, and inside this function there is a conditional statement that has different behaviors depending if "reponse" is truthy or falsy. If an endpoint is not reached, we will recieve an error. Then I chained a second then method that is passed a callback function that takes jsonResponse as its parameter and return jsonResponse. The second "then()" function will only run if the first "then()" method finishes running, and it will not run if an error is thrown. */