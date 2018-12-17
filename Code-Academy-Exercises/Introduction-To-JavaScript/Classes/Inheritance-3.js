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

class Nurse extends HospitalEmployee {
  constructor(name, certifications) {
      super(name);
      this._certifications = certifications; 
    }
  }

const nurseOlynyk = new Nurse('Olynyk', ['Trauma', 'Pediatrics']);



/* On lines 20-25 I created a subclass of "Nurse" to the parent class "HospitalEmployee". On line 20 I used the "extend" keyword to make the methods of the "HospitalEmployee" class available to the "Nurse" class. The constructor method on line 21 accepts two arguments, "name" and "certifications". The "super" keyword on line 22 calls the constructor from the parent class "HospitalEmployee". When this line of code runs, the "super(name)" passes the name arguement of the "Nurse" class to the constructor of the "HospitalEmployee" class and sets "this._name = name" for any new Nurse instances. "_certifications" is a new property that is unique to the "Nurse" class (see line 23). On line 27 I created a new "Nurse" instance and pass it the values of "Olynyk" and "['Trauma', 'Pediatrics']". */