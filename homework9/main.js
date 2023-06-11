//написати свої приклади за темою ООП (і обʼєкти, і функції)

//обʼєкти
let vehicle = {
  type: "Any type of vehicle",
  wheels: 4,
  move() {
    console.log(`${this.type} is moving`);
  },
};
let rescueVehicle = {
  type: "Rescue Vehicle",
  siren() {
    console.log(`${this.type} has siren sound`);
  },
  __proto__: vehicle,
};
let ambulance = {
  type: "Ambulance",
  telNumber: "103",
  __proto__: rescueVehicle,
};
let firetruck = {
  type: "Firetruck",
  telNumber: "101",
  __proto__: rescueVehicle,
};

console.log(`${ambulance.type} is ${ambulance.__proto__.type} that has telephone number ${ambulance.telNumber}`);
ambulance.move();
console.log(`${firetruck.type} is ${firetruck.__proto__.type} that has telephone number ${firetruck.telNumber}`);
firetruck.siren();

//функції
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.getFullName = () => `${this.firstName} ${this.lastName}`
}

let newPerson = new Person("John", "Smit");
newPerson.getFullName();

function Employee(firstName, lastName, position, dob) {
  Person.call(this, firstName, lastName);
  this.position = position;
  this._dob = dob
  this.calcAge = () => {
    let diff = new Date (Date.now() - new Date(dob).getTime());
    return Math.abs(diff.getFullYear() - 1970) 
  }
}

let newEmployee = new Employee("Oksana", "Syrota", "manager", "04/08/1990");
console.log(newEmployee.getFullName());
console.log(`${newEmployee.position} ${newEmployee.getFullName()} is ${newEmployee.calcAge()} years old`); 


function Customer(firstName, lastName, acctNum, tel) {
  Person.call(this, firstName, lastName);
  const accountNum = acctNum;
  this._tel = tel;
  this.changeTel = (newTel) => ((/^\+380\d{9}$/gi).test(newTel)) ? this._tel = newTel : console.log("Entered telephone number has wrong format");
}

let newCustomer = new Customer("Emilia", "Syrota", 1234459, "+380954321234");
console.log(`${newCustomer.getFullName()} telehone number is ${newCustomer._tel}`); 
newCustomer.changeTel("+380956667778");
console.log(`${newCustomer.getFullName()} telehone number is ${newCustomer._tel}`); 
