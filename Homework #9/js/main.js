// 1) написати свої приклади за темою ООП (і обʼєкти, і функції)

////////////////////////////////////////////////
let car = {
  transmission: "mechanical",
  motor: "diesel",
  speed() {
    console.log(`The maximum speed of the car ${this.model} is ${this.speed} km/h`);
  },
};

let volkswagen = {
  configuration: "sedan",
  speed: "257",
  __proto__: car,
};

let passat = {
  color: "black",
  __proto__: volkswagen,
};

let polo = {
  color: "white",
  __proto__: volkswagen,
};


////////////////////////////////////////////////
//Функції розрахунку максимальної дистанції в залежності від пального, об'єму бака та потужності двигуна.

function CalcMaxDistance(fuel, tank) {
  this.fuel = fuel;
  this.tank = tank;
  let _highway = 0.95;
  let _inCity = 1.3;
  this.maximumDistance = function () {
    let fuel;
    this.fuel === "diesel" ? (fuel = 5) : (fuel = 7);
    let fuelConsumption = (this.tank / fuel) * 100;
    console.log(
      `Maximum driving distance: ${Math.floor(fuelConsumption)} km on the type of fuel: ${
        this.fuel
      }. The maximum distance on the highway ${Math.floor(
        fuelConsumption / _highway
      )} km. The maximum distance in the city ${Math.floor(fuelConsumption / _inCity)} km.`
    );
    return fuelConsumption;
  };
}

let distanceForPassat = new CalcMaxDistance("gas", 65);
distanceForPassat.maximumDistance();


function MaxDistanceForMotor(fuel, tank, engine = 1.6) {
  CalcMaxDistance.call(this, fuel, tank);
  this.engineCapacity = engine;
  let distance = this.maximumDistance();
  this.maximumDistance = () => {
    this.engineCapacity <= 2 ? (engine = 1) : (engine = 1.2);
    return console.log(
      `The maximum driving distance for a car with an engine capacity ${this.engineCapacity} is ${Math.floor(distance / engine)}.`
    );
  };
};

let distanceForPassat25 = new MaxDistanceForMotor("diesel", 55, 2.5);
distanceForPassat25.maximumDistance();
