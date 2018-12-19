const xhr = new XMLHttpRequest();
const url = 'https://api-to-call.com/endpoint';
const data = JSON.stringify({id: '200'});

xhr.responseType = 'json';

xhr.onreadystatechange = () => {
  if(xhr.readyState === XMLHttpRequest.DONE){
    return xhr.response;
  }
}

xhr.open('POST', url);
xhr.send(data);





/*  On line 3 the variable "data" is set to a line of code that will convert a value to a JSON string. By converting the value to a string, we can then send the data to a server. "onreadystatechange" will contain the event handler that will be called when xhr's state changes (see line 6). The "response" property will contain the data that we're getting back from the POST request (see line 9). The ".open()" function on line 13 creates a new request and the arguments passed in determine what type of request is being made and where it's being made to. ".send()" will send the request to the server. */