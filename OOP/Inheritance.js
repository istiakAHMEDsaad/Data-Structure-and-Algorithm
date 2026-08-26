// Eliminate redundant code
class Player {
  #name;
  #age;

  constructor(name, age) {
    this.#name = name;
    this.#age = age;
  }

  getPlayerDetails() {
    return `${this.#name} is ${this.#age} years old`;
  }
}

class Cricketer extends Player {
  #centuries;

  constructor(name, age, centuries) {
    super(name, age);
    this.#centuries = centuries;
  }

  getPlayerDetails() {
    return `${super.getPlayerDetails()} & total centuries is ${this.#centuries}`;
  }
}

class Footballer extends Player {
  #goals;

  constructor(name, age, goals) {
    super(name, age);
    this.#goals = goals;
  }

  getPlayerDetails() {
    return `${super.getPlayerDetails()} & total goals is ${this.#goals}`;
  }
}

const robiul = new Cricketer("Robiul", 32, 1);
const motin = new Footballer("Motin", 28, 13);

console.log(robiul.getPlayerDetails());
