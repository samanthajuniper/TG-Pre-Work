class Surgeon {
  constructor(name, department) {
    this.name = name;
    this.department = department;
  }
}

const surgeonCurry = new Surgeon('Curry', 'Cardiovascular');

const surgeonDurant = new Surgeon('Durant', 'Orthopedics');


/*An instance is object that contains the property names and methods of a class, but with unique property values. On line 8 I created an instance of the class "Surgeon". The "new" key word generates a new instance of the "Surgeon" class by calling the "constructor()" method on line 2. The "Curry" and "Cardiovascular" strings are passed to the "Surgeon" constructor, and the name and department properties are set to each string respectively. */