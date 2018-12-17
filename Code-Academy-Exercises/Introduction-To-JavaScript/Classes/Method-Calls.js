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

console.log(surgeonCurry.name);
surgeonCurry.takeVacationDays(3);
console.log(surgeonCurry.remainingVacationDays)

/*I can call a method on an instance in the same way I call a method on an object: instanceName.method(). On line 28 I printed the value saved to the "name" property of the "surgeonCurry" object to the console. On line 29 I called the "takeVacationDays()" function on the "surgeonCurry" object with a value of "3". On line 30 I printed the value saved to the "remainingVacationDays" property of the surgeonCurry instance to the console. This resulted in the number "17" because the function "takeVacationDays(3)" is calculated by taking the value of "remainingVacationDays", which is 20, minus "days off" which is 3 (20-3=17). */