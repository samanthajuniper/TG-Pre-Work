const robot = {
  _energyLevel: 100,
  recharge(){
    this._energyLevel += 30;
    console.log(`Recharged! Energy is currently at ${this._energyLevel}%.`)
  }
};

robot._energyLevel = 'high';
robot.recharge();



/*Privacy in this context means that only certain properties should be mutable or able to change in value. Privacy follows a naming convention that signals to other developers how to interact with a property. On line 2 the "_energyLevel" property has an underscore in front of the name, which is meant to communciate that "_energyLevel" should not be directly manipulated. On line 9 I ignored the "_" signal and mutated the "_energyLevel" property anyway. When I logged the results to the console on line 10 there was a string that did not make much sense: "Recharged! Energy is currently at high30%.". This is an example of an unwanted side-effect of altering a property that should not have been altered. */