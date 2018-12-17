function robotFactory(model, mobile){
  return {
    model: model,
    mobile: mobile,
    beep() {
      console.log('Beep Boop');
    }
  }
}

// To check that the property value shorthand technique worked:
const newRobot = robotFactory('P-501', false)
console.log(newRobot.model)
console.log(newRobot.mobile)



function robotFactory(model, mobile){
  return {
    model,
    mobile,
    beep() {
      console.log('Beep Boop');
    }
  }
}


// To check that the property value shorthand technique worked:
const newRobot = robotFactory('P-501', false)
console.log(newRobot.model)
console.log(newRobot.mobile)


/*Destructuring is a shortcut for assigning properties to variables. One destructuring technique called "property value shorthand" eliminates the need to repeat ourselves for property assignments. On line 18 I refactored the factory function from line 1 to include the property value shorthand technique. I removed the colon and value name after the property name, so "model: model," became just "model,". */