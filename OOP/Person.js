class Person {
  constructor(name, color, weight) {
    this.name = name;
    this.color = color;
    this.weight = weight;
    this.lookingAt = null;
  }

  connectWith(person) {
    this.lookingAt = person;
    if (person.lookingAt !== this) {
      person.connectWith(this);
    }
  }

  introduce() {
    const lookingAtName = this.lookingAt ? this.lookingAt.name : "nobody";
    return `Hi, I am ${this.name} and I am looking at ${lookingAtName}.`;
  }
}

const rubana = new Person("Rubana", "Red", 50);
const rahima = new Person("Rahima", "Yellow", 62);

// 1-to-1 Connection
rubana.connectWith(rahima);

console.log(rubana.introduce());
console.log(rahima.introduce());