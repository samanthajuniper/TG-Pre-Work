class Dog {
  constructor(name) {
    this._name = name;
    this._behavior = 0;
  }

  get name() {
    return this._name;
  }
  get behavior() {
    return this._behavior;
  }   

  incrementBehavior() {
    this._behavior ++;
  }
}

const halley = new Dog('Halley');
console.log(halley.name); // Print name value to console
console.log(halley.behavior); // Print behavior value to console
halley.incrementBehavior(); // Add one to behavior
console.log(halley.name); // Print name value to console
console.log(halley.behavior); // Print behavior value to console


/*Classes are a tool that can be used to quickly produce similar objects. They are great for reducing redundancy and debugging time. I predicted that lines 19-24 would log the dog's name "Halley" and the number "" to the console. Because the class has an increment value of +1 added to "behavior" I would expect that "Halley" "2" would log to the console. However, I forgot to zero-index the behaviors. */