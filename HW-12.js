const car = {
  drive() {
    if (
      this.engineStatus !== "check engine" &&
      this.fuelOrEnergy > 0 &&
      this.wheels === 4
    ) {
      for (let i = 0; i < 3; i++) {
        setTimeout(() => {
          console.log(`${i * 50} km/h`);
        }, (this.from0to100 / 2) * i);
        this.fuelOrEnergy -= 0.5;
      }
    } else {
      console.log(
        "Can`t drive, fill up the car or check the technical condition"
      );
    }
  },
  brake() {
    setTimeout(() => {
      console.log("brake pedal hit, brake lights on");
      setTimeout(() => {
        console.log("brake calipers locked the discs");
      }, 1000);
    }, this.from0to100 + 1000);
  },
};

const lanos = {
  engineStatus: "ok",
  fuelOrEnergy: 100,
  wheels: 4,
  from0to100: 12500,
  startup() {
    console.log("God, please, help me!");
    console.log("I`m insert the key, then trurn it, and I hear...");
    if (this.engineStatus === "check engine") {
      console.log("*va-va-vavavavavava-ktsss");
    } else {
      console.log("*va-va-vavavavavava-varoooom-rom-rom-rom-rom-rom*");
      console.log("Heere we go");
    }
  },
};
Object.setPrototypeOf(lanos, car);
for (let properties in lanos) {
  if (lanos.hasOwnProperty(properties)) {
    console.log(`${properties} is Lanos property`);
  } else {
    console.log(`${properties} is Lanos property`);
  }
}
lanos.startup();
lanos.drive();
lanos.brake();
