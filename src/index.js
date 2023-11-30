class Hero {
  constructor(name, age, type) {
    this.name = name;
    this.age = age;
    this.type = type;
  }

  attack() {
    let attack;

    switch (this.type) {
      case "mage":
        attack = "magic";
        break;
      case "warrior":
        attack = "sword";
        break;
      case "monk":
        attack = "martial arts";
        break;
      case "ninja":
        attack = "shuriken";
        break;
      default:
        attack = "an unknown attack";
    }

    console.log(`The ${this.type} attacked using ${attack}`);
  }
}

const hero1 = new Hero("Aragorn", 30, "warrior");
const hero2 = new Hero("Gandalf", 150, "mage");

hero1.attack();
hero2.attack();
