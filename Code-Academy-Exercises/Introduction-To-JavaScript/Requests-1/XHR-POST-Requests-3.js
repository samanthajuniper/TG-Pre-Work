// Information to reach API
const apiKey = '71b569fd7e244cd69d499a9824438c70';
const url = 'https://api.rebrandly.com/v1/links';

// Some page elements
const inputField = document.querySelector('#input');
const shortenButton = document.querySelector('#shorten');
const responseField = document.querySelector('#responseField');

// AJAX functions
const shortenUrl = () => {
  const urlToShorten = inputField.value;
  const data = JSON.stringify({destination: urlToShorten}); 
  const xhr = new XMLHttpRequest;
  xhr.responseType = 'json';
  xhr.onreadystatechange = () => {if (xhr.readyState === XMLHttpRequest.DONE) {
  renderResponse(xhr.response);
}};
  xhr.open('POST', url);
  xhr.setRequestHeader('Content-type', 'application/json');
xhr.setRequestHeader('apikey', apiKey);
  xhr.send(data);
}


// Clear page and call AJAX functions
const displayShortUrl = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild);
  }
  shortenUrl();
}

shortenButton.addEventListener('click', displayShortUrl);



/*In this block of code I made a POST request to the Rebrandly API to shorten a URL. On line 1 I assigned my Rebrandly API Key to the variable "apiKey". The "urlToShorten" variable will hold the value of the input field. The code on line 13 is important because the API expects to see an object with a key destination that has a value of a URL. On lines 15-23 I used the boilerplate code for the POST request. Overall, the POST request takes the long url and sends back a shortened url. */