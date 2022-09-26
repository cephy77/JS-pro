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
  #fuelPercentage = 0;
  get fuelPercentage() {
    return this.#fuelPercentage;
  }
  set fuelConsumed(percents) {
    if (percents > this.#fuelPercentage) {
      console.log("We don't have negative fuel");
    } else {
      return (this.#fuelPercentage -= percents);
    }
  }
  set refuel(percents) {
    if (percents + this.#fuelPercentage > 100) {
      console.log("There is no additional space for fuel");
    } else {
      this.#fuelPercentage += percents;
    }
  }

  calculateTripFuel(distance, range) {
    const tripFuelPercentage = (distance * 100) / range;
    return tripFuelPercentage;
  }
  completeFlight(distance) {
    if (this.range > distance) {
      const neededFuel = this.calculateTripFuel(distance, this.range);
      if (neededFuel < this.fuelPercentage) {
        this.fuelConsumed = neededFuel;
        console.log(
          `${distance}km flight completed. ${this.fuelPercentage.toFixed(
            1
          )}% of fuel remains`
        );
      } else {
        console.log("Not enough fuel, please fill up fuel tanks");
      }
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
  static manufacturer = "Boeing";
  static doSomething() {
    return `${this.manufacturer} facility `;
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
B747_800.refuel = 100;
B747_800.loadCargo(5000);
B747_800.completeFlight(4000);
console.log(CargoAircraft.manufacturer);
console.log(CargoAircraft.doSomething());
