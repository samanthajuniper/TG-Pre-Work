const robotFactory = (model, mobile) => {
 return { 
     model: model,
 	 mobile: mobile, 
 	 beep() {
      console.log('Beep Boop');
  	}
  }
};

const tinCan = robotFactory('P-500', true);
tinCan.beep();



/*A factory function is a function that returns an object and can be reused to make multiple object instances. Factory functions can also have parameters allowing us to customize the object that gets returned. On lines 1-9 I created a factory fucntion called "robotFactory" that has two parameters "model" and mobile". The function returns an object that has two properties "model:model" and "mobile:mobile". Then I added a method named "beep" that logs "Beep Boop" to the console when called. On line 11 I created a constant variable "tinCan" that is equal to the robotFactory function with the arguments "P-500" and "true". When I called the "beep()" method to the "tinCan" variable on line 12, "Beep Boop" logged to the console.*/