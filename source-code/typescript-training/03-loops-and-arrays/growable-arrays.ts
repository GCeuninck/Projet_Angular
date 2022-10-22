let sportsTwo: string[] = ["Golf", "Cricket", "Tennis"];

sportsTwo.push("Baseball");
sportsTwo.push("Futbol");
sportsTwo = sportsTwo.filter(elt => elt == "Golf");

for (let tempSport of sportsTwo) {
    console.log(tempSport);
}