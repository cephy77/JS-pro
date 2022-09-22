// Very simplificated model
class Aircraft {
  constructor() {
    this.ability = "fly";
  }
}
class Airplane extends Aircraft {
  constructor() {
    super();
    this.fuselage = true;
    this.wings = true;
    this.engines = true;
  }
  completeFlight(distance) {
    if (this.range > distance) {
      console.log(`${distance}km flight completed`);
    } else {
      console.log(
        `Can not complete ${distance}km flight, the maximum range of that aircraft is ${this.range}`
      );
    }
  }
}
class CivilAirplane extends Airplane {
  constructor() {
    super();
    this.purpose = "Non-military";
  }
}
class CargoAircraft extends CivilAirplane {
  constructor(name, capacity, range) {
    super();
    this.name = name;
    this.cargoCapacity = capacity;
    this.range = range;
  }
  loadCargo(cargo) {
    if (this.cargoCapacity > cargo) {
      console.log(`${cargo} kg of cargo is loaded`);
    } else {
      console.log(
        `The maximum capacity of that aircraft is ${this.cargoCapacity}kg, and it can not lift ${cargo}kg og goods`
      );
    }
  }
}

const B747_800 = new CargoAircraft("Boeing 747-800", 23500, 5700);
console.log(B747_800);
B747_800.loadCargo(5000);
B747_800.completeFlight(4000);
