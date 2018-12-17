class Surgeon {
  constructor(name, department) {
    this._name = name;
    this._department = department;
    this._remainingVacationDays = 20;
  }
  
  get name() {
    return this._name;
  }
  
  get department() {
    return this._department;
  }
  
  get remainingVacationDays() {
    return this._remainingVacationDays;
  }
  
  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }
}

const surgeonCurry = new Surgeon('Curry', 'Cardiovascular');
const surgeonDurant = new Surgeon('Durant', 'Orthopedics');


/*getter and setter methods can be used within classes, but their syntax requires that we do not use commas between methods. On lines 8-10 I created a "get" method called "name" that will return the value saved to "name". On lines 12-14 I created another get method called "department" that will return the value saved to "department". I did not separate the two methods with a comma. I used the same "get" method for the "takeVacationDaysOff" value on lines 16-18. On lines 20-22 I created a new method called "takeVacationDays" with the parameter "daysOff" and subtracted "daysOff" from tne value of the "_remainingVacationDays" property, which is 20. */