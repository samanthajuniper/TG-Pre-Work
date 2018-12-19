const getData = async () => {
  try {
    const response = await fetch('https://api-to-call.com/endpoint', {
      method: 'POST',
      body: JSON.stringify({id: 200})
    })
    if(response.ok){
      const jsonResponse = await response.json();
      return jsonResponse;
    }
    throw new Error('Request failed!');
  } catch(error) {
    console.log(error);
  }
}

/*The key differnce for a async POST request is seen on lines 3-5. The "fetch()" request has a second argumnet that takes the " method: 'POST'" and "body: JSON.stringify({id: 200})" properties. The rest of the code is the same as is used in async GET requests. */