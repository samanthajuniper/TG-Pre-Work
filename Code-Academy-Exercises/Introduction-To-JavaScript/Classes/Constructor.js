class Surgeon {
  constructor(name, department) {
    this.name = name;
    this.department = department;
  }
};


/*Every time there is a new instance of a class, the "constructor()" method is called. Within the "Surgeon" class, I created a constructor method with the parameters "name" and "department". Within the constructor method the "this" keyword is used to refer to an instance of the "Surgeon" class, so "this" is used to set the value of the "Surgeon" instance's name property to the name argument (see line 3). The same happens for the "department" value on line 4. */