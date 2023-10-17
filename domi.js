class Hunter {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.kills = 0;
    this.misses = 0;
  }
  shootAnimal() {
    const animals = ["Duck", "Deer", "Bear"];
    const animalType = animals[Math.floor(Math.random() * animals.length)];
    const hit = this.determineHit(animalType);
    if (hit) {
      this.kills++;
    } else {
      this.misses++;
    }
    const animalStatus = hit ? "Hit" : "Miss";
    console.log(this.name + " shot a " + animalType + "(" + animalStatus + ")");
  }
  determineHit(animalType) {
    const hitProbabilities = {
      Duck: 2 / 3,
      Deer: 2 / 3,
      Bear: 1 / 3,
    };
    return Math.random() < hitProbabilities[animalType];
  }
  getKills() {
    return this.kills;
  }
  getMisses() {
    return this.misses;
  }
}
// Voorbeeldgebruik:
const hunter1 = new Hunter("John", 30, "Male");
const hunter2 = new Hunter("Nadya", 50, "Female");
for (let i = 0; i < 10; i++) {
  hunter1.shootAnimal();
}
for (let i = 0; i < 10; i++) {
  hunter2.shootAnimal();
}
console.log(
  hunter1.name + " heeft " + hunter1.getKills() + " doden op zijn geweten "
);
console.log(
  hunter1.name + " heeft " + hunter1.getMisses() + " gemiste schoten. "
);
console.log(
  hunter2.name + " heeft " + hunter2.getKills() + " doden op zijn geweten "
);
console.log(
  hunter2.name + " heeft " + hunter2.getMisses() + " gemiste schoten. "
);
