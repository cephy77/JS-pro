// Task 1
function logUserWithDelay(user, timeStr) {
  const delay = timeStr.split(" ");
  const transferToMs = (delay) => {
    const timeUnits = {
      second: 1000,
      minute: 60 * 1000,
      hour: 60 * 60 * 1000,
    };
    let ms = 0;
    for (let i = 0; i < delay.length; i++) {
      const multiplier = delay[i];
      const timeUnitStr = delay[++i];
      ms +=
        multiplier *
        (timeUnits[timeUnitStr]
          ? timeUnits[timeUnitStr]
          : timeUnits[timeUnitStr.slice(0, -1)]);
    }
    return ms;
  };
  return setTimeout(() => console.log(user), transferToMs(delay));
}
console.log(logUserWithDelay("Patrick Bateman", "1 minute 4 seconds"));

// Task 2
const swords = {
  steel: "for humans",
  silver: "for monsters",
};
const scabbard = JSON.stringify(swords);
function hideOrShowSwords(elem) {
  if (typeof elem === "object") {
    return JSON.stringify(elem);
  } else {
    try {
      return JSON.parse(elem);
    } catch (error) {
      console.log("It doesn't seem to be JSON, does it?");
    }
  }
}
const hide = hideOrShowSwords(swords);
const show = hideOrShowSwords(scabbard);
console.log(typeof hide, typeof show);
// Task 3
function isItJSON(string) {
  try {
    JSON.parse(string);
    return true;
  } catch (error) {
    return false;
  }
}
console.log(isItJSON(scabbard));
