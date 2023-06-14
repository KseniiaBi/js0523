//  Написати реалізацію класу + наслідування + приватні, захищені та статичні методи і окремо фабрику

class Player {
  #clubName = "Manchester City Football Club";
  #coach = "Pep Guardiola";

  static players = [];             // формує список гравців при створені нового об'єкта.
  static listOfPlayers() {         // виводить список гравців

    if (Player.players.length > 0) {
      let num = 0;
      return Player.players.forEach((elem) => {
        console.log(`${++num}) ${elem}`);
      });
    } else {
      console.log(`Add pleyer!`);
    }
  }

  constructor(name, number, position) {
    this._name = name;
    this.number = number;
    this.position = position;
    this.addPlayer(name);
  }

  addPlayer(name) {                   // додаємо гравця до масиву
    if (Player.players.length < 11) {
      Player.players.push(name);
    } else {
      console.log(`The team is complete.. Head coach: ${this.#coach}`);
      Player.listOfPlayers();
    }
  }

  get number() {
    return this._number;
  }

  set number(num) {
    return (this._number = num);
  }
}

let player1 = new Player("Erling Haaland", 9, "Attack");
let player2 = new Player("Kevin De Bruyne", 17, "Midfielder");
let player3 = new Player("Ederson", 31, "Goalkeeper");

/////////////////////////////////////////////////////////////

class Coupe {
  constructor(type, doors, size) {
    this.type = type;
    this.doors = doors;
    this.size = size;
  }
}

class Sedan {
  constructor(type, doors, size) {
    this.type = type;
    this.doors = doors;
    this.size = size;
  }
}

class Universalis {
  constructor(type, doors, size) {
    this.type = type;
    this.doors = doors;
    this.size = size;
  }
}

class CarsFactory {
  createCar(car) {
    switch (car.type) {
      case "coupe":
        return new Coupe(car.type, car.doors, car.size);
        break;
      case "sedan":
        return new Sedan(car.type, car.doors, car.size);
        break;
      case "universalis":
        return new Universalis(car.type, car.doors, car.size);
        break;
      default:
        return new Sedan(car.type, car.doors, car.size);
        break;
    }
  }
}

const carsFactory = new CarsFactory();
let car1 = carsFactory.createCar({ type: "coupe", doors: 2, size: "small" });
let car2 = carsFactory.createCar({ type: "sedan", doors: 4, size: "medium" });
let car3 = carsFactory.createCar({ type: "universalis", doors: 5, size: "big" });
