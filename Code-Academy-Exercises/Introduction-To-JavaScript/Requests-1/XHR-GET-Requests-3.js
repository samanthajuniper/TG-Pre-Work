// Information to reach API
const url = 'https://api.datamuse.com/words?';
const queryParams = 'rel_rhy=';

// Selecting page elements
const inputField = document.querySelector('#input');
const submit = document.querySelector('#submit');
const responseField = document.querySelector('#responseField');

// AJAX function
const getSuggestions = () => {
  const wordQuery = inputField.value;
  const endpoint = `${url}${queryParams}${wordQuery}`;
  
  const xhr = new XMLHttpRequest();
  xhr.responseType = 'json';

  xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      renderResponse(xhr.response);
    }
  }
  
  xhr.open('GET', endpoint);
  xhr.send();
}

// Clear previous results and display results to webpage
const displaySuggestions = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild);
  }
  getSuggestions();
}

submit.addEventListener('click', displaySuggestions);





/*The URL saved to the "url" variable at the top of the page directs my GET request. Within the "getSuggestions()" function, I wrote the boilerplate code for an AJAX GET request using an XMLHttpRequest object(see lines 15-25). Line 24 is particularly important because I called the "open()" function on "xhr", and the arguement "endpoint", which tells the get request that it is looking for words that rhyme with what was typed into the input field in the specified URL. When I typed "cap" into the input field, I recieved 10 words that rhymed. */