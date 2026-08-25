// Increase Reusability
class Player {
  // private property
  #playerName;
  #birthDay;
  #monthlySalary;
  #noOfMonths;

  constructor(name, day, salary, month) {
    this.#playerName = name;
    this.#birthDay = day;
    this.#monthlySalary = salary;
    this.#noOfMonths = month;
  }

  calculateAge() {
    const dateGap = Date.now() - new Date(this.#birthDay).getTime();
    const ageDiff = new Date(dateGap);

    return Math.abs(ageDiff.getUTCFullYear() - 1970);
  }

  getSalary() {
    return (this.#monthlySalary * this.#noOfMonths).toLocaleString();
  }
}

const playerOne = new Player("Namunkin", "1985-03-26", 280000, 12);
console.log(`12 month salary:`, playerOne.getSalary());
console.log(playerOne.birthDay);