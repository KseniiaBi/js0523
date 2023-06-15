//написати реалізацію класу + наслідування + приватні, захищені та статичні методи і окремо фабрику

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  get lastName() {
    return this._lastName;
  }
  set lastName(newName) {
    if (newName.length >= 2) {
      this._lastName = newName;
      return;
    } else {
      console.log("Lastname is too short");
    }
  }
}

let newPerson = new Person("John", "Smit");
console.log(newPerson.lastName);
console.log(newPerson.getFullName());
newPerson.lastName = "Mitch";
console.log(newPerson.getFullName());

class Employee extends Person {
  constructor(firstName, lastName, position, dob) {
    super(firstName, lastName);
    this.position = position;
    this.dob = dob;
  }
  calcAge() {
    let diff = new Date(Date.now() - new Date(this.dob).getTime());
    return Math.abs(diff.getFullYear() - 1970);
  }
}

let newEmployee = new Employee("Oksana", "Syrota", "manager", "04/08/1990");
console.log(newEmployee.getFullName());
console.log(
  `${
    newEmployee.position
  } ${newEmployee.getFullName()} is ${newEmployee.calcAge()} years old`
);

class Customer extends Person {
  static telMessage = "Entered telephone number has wrong format";
  constructor(firstName, lastName, acctNum, tel) {
    super(firstName, lastName);
    this.accountNum = acctNum;
    this._tel = tel;
  }
  changeTel(newTel) {
    /^\+380\d{9}$/gi.test(newTel)
      ? (this._tel = newTel)
      : console.log(telMessage);
  }
}

let newCustomer = new Customer("Emilia", "Syrota", 1234459, "+380954321234");
console.log(
  `${newCustomer.getFullName()} telehone number is ${newCustomer._tel}`
);
newCustomer.changeTel("+380956667778");
console.log(
  `${newCustomer.getFullName()} telehone number is ${newCustomer._tel}`
);
console.log(Customer.telMessage);

// Factory

class Ambulance {
  constructor(city, telephone) {
    this.city = city;
    this.telephone = telephone;
  }
}
class Police {
  constructor(city, telephone, departmentNumber) {
    this.city = city;
    this.telephone = telephone;
    this.departmentNumber = departmentNumber;
  }
}
class FireDep {
  constructor(city, telephone, address) {
    this.city = city;
    this.telephone = telephone;
    this.address = address;
  }
}
class ResqueDepartment {
  createResque(options) {
    switch (options.type) {
      case "ambluance":
        return new Ambulance(options.city, options.telephone);
        break;
      case "police":
        return new Police(
          options.city,
          options.telephone,
          options.departmentNumber
        );
        break;
      case "fire":
        return new FireDep(options.city, options.telephone, options.address);
        break;
      default:
        return new Ambulance(options.city, options.telephone);
        break;
    }
  }
}
const resqueDep = new ResqueDepartment();
let resq1 = resqueDep.createResque({
  city: "New York",
  telephone: "911",
  type: "ambluance",
});
let resq2 = resqueDep.createResque({
  city: "Boston",
  telephone: "911",
  departmentNumber: "1234567",
  type: "police",
});
let resq3 = resqueDep.createResque({
  city: "Denver",
  telephone: "911",
  address: "S HighWay 7",
  type: "fire",
});
let resq4 = resqueDep.createResque({ city: "Miami", telephone: "911" });

console.log(resq1, resq2, resq3, resq4);
