let message = "There is no war in Ba Sing Se";
console.log(message.split(" ").length);

let countries = ["China", "Japan", "South Korea", "Vietnam", "Malaysia"];
let capital = ["Beijing", "Tokyo", "Seoul", "Hanoï", "Kuala Lumpur"];
let x = 3;
console.log(countries[x] + " has the capital named : " + capital[x]);

let randomizer = Math.floor(Math.random() * 4);
if (randomizer === 0) {
  console.log("A certain victory for the number " + randomizer);
} else if (randomizer === 1) {
  console.log("Not so certain victory for the number " + randomizer);
} else if (randomizer === 2) {
  console.log("An uneasy victory for the number " + randomizer);
} else {
  console.log(
    "Your fate is unclear, ô chosen undead for the number " + randomizer
  );
}

let nowDate = new Date();
let nowMonth = nowDate.getMonth();
let checkSeason;
if (nowMonth >= 0 && nowMonth <= 2) {
  checkSeason = "Actual Season is Winter";
} else if (nowMonth >= 3 && nowMonth <= 5) {
  checkSeason = "Actual Season is Spring";
} else if (nowMonth >= 6 && nowMonth <= 8) {
  checkSeason = "Actual Season is Summer";
} else {
  checkSeason = "Actual Season is Autumn";
}
console.log(checkSeason);
