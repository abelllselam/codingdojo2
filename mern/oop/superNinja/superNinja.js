class Ninja {
  constructor(name, health = 90, speed = 3, strength = 3) {
    this.name = name;
    this.health = health;
    this.speed = speed;
    this.strength = strength;
  }

  sayName() {
    console.log(`My name is ${this.name}`);
  }

  showStats() {
    console.log(`
    Name: ${this.name}\n
    Name: ${this.health}\n
    Strength: ${this.strength}\n
    Speed: ${this.speed}
    `);
  }

  drinkSake() {
    this.health += 10;
    // console.log(this.health);
  }
}

class Sensei extends Ninja {
  constructor(name, health = 200, speed = 10, strength = 10, wisdom = 10) {
    super(name, health, speed, strength);
    this.wisdom = wisdom;
  }

  superWisdom() {
    return "Hi, i am super wisdom";
  }

  speakWisdom() {
    super.drinkSake();
    console.log("This is a wise message");
  }
}

// firstNinja = new Ninja("John", 20, 20, 20);
// firstNinja.showStats();
// firstNinja.drinkSake();

const firstSensei = new Sensei("Master");
// firstSensei.speakWisdom();
// firstSensei.sayName();
firstSensei.showStats();
