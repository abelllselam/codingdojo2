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
    Strength: ${this.strength}\n
    Speed: ${this.speed}
    `);
  }

  drinkSake() {
    this.health += 10;
    console.log(this.health);
  }
}

firstNinja = new Ninja("John", 20, 20, 20);
firstNinja.showStats();
firstNinja.drinkSake();
