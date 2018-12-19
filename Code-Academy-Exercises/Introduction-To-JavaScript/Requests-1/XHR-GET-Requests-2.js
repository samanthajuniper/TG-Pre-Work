const xhr = new XMLHttpRequest();
const url = "https://api-to-call.com/endpoint";

xhr.responseType = 'json';
xhr.onreadystatechange = () => {
  if (xhr.readyState === XMLHttpRequest.DONE) { return xhr.response
} 
};

xhr.open('GET', url);
xhr.send();


/* The "XMLHttpRequest" object is used to create and send requests. On line 1 I created a new instance of this object and stored it to a variable named "xhr". On line 2 I created a constant variable named "url" that holds the URL as a string. On line 4 I set the "responseType" property of the xhr object to equal "json". I then set the "xhr.onreadystatechange" event handler equal to an anonymous arrow function on line 5. Then on line 6 I added an if statement that checks to see if the request has finished. If the request has finished, the "response" property of "xhr" is returned. On line 10 I called the ".open()" function on xhr which takes the arguments "GET" and "url". ".open()" creates a new request and the arguments passed in determine the type and URL of the request. Finally I called the ".send()" function on "xhr" on line 11. Tht totality of this code together makes up the boilerplate code for an AJAX GET request using an XMLHttpRequest object. */