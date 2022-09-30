function wakeUp(status) {
  if (status === "I'm sleeping") {
    console.log("I get up");
    return "I'm awake";
  }
}
function grabABrushNPutALilMakeUp(status) {
  if (status === "I'm awake") {
    console.log("I'm doing morning routine");
    return "I'm ready";
  }
}
function sendMeOutOfSpace(status) {
  if (status === "I'm ready") {
    console.log("I'm gon sending outa space");
    return "I'm in space";
  }
}
function findAnotherRace(status) {
  if (status === "I'm in space") {
    console.log("To find anoda race");
    return "I'm found another race";
  }
}

const routine = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("I'm sleeping");
  }, 1000);
})
  .then((status) => wakeUp(status))
  .then((status) => grabABrushNPutALilMakeUp(status))
  .then((status) => sendMeOutOfSpace(status))
  .then((status) => findAnotherRace(status));

//Not supported in Quokka
fetch("http://swapi.dev/api/people/1/")
  .then((result) => result.json())
  .then((data) => {
    console.log(data.name);
    console.log("Appears in:");
    return data.films;
  })
  .then((filmsArray) => {
    filmsArray.forEach((moovie) => {
      fetch(moovie)
        .then((result) => result.json())
        .then((data) => {
          console.log(data.title);
        });
    });
  });
