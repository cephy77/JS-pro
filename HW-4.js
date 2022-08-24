const starWarCharacters = [
  {
    name: "Luke Skywalker",
    height: "172",
    mass: "77",
    hair_color: "blond",
    skin_color: "fair",
    eye_color: "blue",
    birth_year: "19BBY",
    gender: "male",
    films: ["2", "6", "3", "1", "7"],
  },
  {
    name: "C-3PO",
    height: "167",
    mass: "75",
    hair_color: "n/a",
    skin_color: "gold",
    eye_color: "yellow",
    birth_year: "112BBY",
    gender: "n/a",
    films: ["1", "2", "3", "4", "5", "6"],
  },
  {
    name: "Darth Vader",
    height: "202",
    mass: "136",
    hair_color: "none",
    skin_color: "white",
    eye_color: "yellow",
    birth_year: "41.9BBY",
    gender: "male",
    films: ["1", "2", "3", "6"],
  },
  {
    name: "Leia Organa",
    height: "150",
    mass: "49",
    hair_color: "brown",
    skin_color: "light",
    eye_color: "brown",
    birth_year: "19BBY",
    gender: "female",
    films: ["1", "2", "3", "6"],
  },
  {
    name: "Obi-Wan Kenobi",
    height: "182",
    mass: "77",
    hair_color: "auburn, white",
    skin_color: "fair",
    eye_color: "blue-gray",
    birth_year: "57BBY",
    gender: "male",
    films: ["1", "2", "3", "4", "5", "6"],
  },
];

// Task 1
const genderArr = starWarCharacters.map((character) => character.gender);
console.log(genderArr);

// Task 2
let filmsInTotal = 0;
starWarCharacters.forEach((character) => {
  if (character.films.length > filmsInTotal) {
    filmsInTotal = character.films.length;
  }
});
const mostShowedCharactersArr = starWarCharacters.filter(
  (character) => character.films.length === filmsInTotal
);
console.log(mostShowedCharactersArr);

// Task 3
const heaviestNotAJediMaster = starWarCharacters.reduce((heavy, character) => {
  if (heavy.length === 0) {
    heavy = character.mass;
  }
  if (+character.mass > heavy) {
    heavy = character.name;
  }
  return heavy;
}, []);
console.log(heaviestNotAJediMaster);

// Task 4
const filmsWithAllCharactersArr = starWarCharacters.reduce((films, current) => {
  if (films.length === 0) {
    films = current.films;
  }
  films.forEach((element) => {
    if (current.films.indexOf(element) === -1) {
      films.splice(element.indexOf(), 1);
    }
  });
  return films;
}, []);
filmsWithAllCharactersArr.sort((a, b) => a - b);
console.log(filmsWithAllCharactersArr);

// Task 5
starWarCharacters.splice(0, starWarCharacters.length);
console.log(starWarCharacters);

//May be this code not good enough, but only a Sith deals in absolute
