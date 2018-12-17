class HospitalEmployee {
  constructor(name) {
    this._name = name;
    this._remainingVacationDays = 20;
  }
  
  get name() {
    return this._name;
  }
  
   get remainingVacationDays() {
    return this._remainingVacationDays;
  }
  
  takeVacationDays(daysOff) {
   this._remainingVacationDays -= daysOff;
  }
}


/*I made a parent class called "HospitalEmployee" that contains the shared properties and methods that the subclasses "Doctor" and "Nurse" will share. */