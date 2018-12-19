const getData = async () => {
  try {
    const response = await fetch('https://api-to-call.com/endpoint');
    if (response.ok) {
      const jsonResponse = await response.json();
      return jsonResponse;
    }
    throw new Error('Request failed!');
  } catch (error) {
    console.log(error);	
  }
}


/*The "async" statement returns a promise(see line 1). "await" can only be used in an async function, and it lets a program run while waiting for a promise to resolve(see line 3). The "try...catch" statement the code in the "try" block will run, and if an error is encoutnered the code in the catch statement will run(see lines 2-8 and 9-11). */