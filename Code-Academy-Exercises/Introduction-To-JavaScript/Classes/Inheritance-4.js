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

const nurseOlynyk = new Nurse('Olynyk', ['Trauma','Pediatrics']);

nurseOlynyk.takeVacationDays(5);
console.log(nurseOlynyk.remainingVacationDays);


/*The "extend" keyword used to declare the "Nurse" subclass, gives the "Nurse" class access to the methods contained in the "HospitalEmployee" parent class. Thus on line 29 I called the parent class' method "takeVacationDays()" on the "nurseOlynyk" instance and inputted an arguement value of 5. On line 30 I logged the value of the "remainingVacationDays" property that was saved in the "nurseOlynyk" instance to the console. The number "15" printed because the code within the parent class on line 16 ran using the value specific to the "nurseOlynyk" instance. Thus, 20-5 = 15. */