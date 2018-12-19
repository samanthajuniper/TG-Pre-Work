fetch('https://api-to-call.com/endpoint', {
  method: 'POST',
  body: JSON.stringify({id: "200"})
}).then(response => {
  if(response.ok){
	  return response.json();  
  }
	throw new Error('Request failed!');
}, networkError => {
  console.log(networkError.message);
}).then(jsonResponse => {
  console.log(jsonResponse);
})


/* On line 1 I called the "fetch()" function and provided it the first argument, a URL that serves as the endpoint. The second argument is the settings object that contains the properties "method: 'POST'" and "body:JSON.stringify({id: "200"})". This second argument determines that this request is a POST request and what information will be sent to the API. */