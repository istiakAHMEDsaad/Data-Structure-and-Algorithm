// Isolate Impact of Change
class BetterArray {
  #items;

  constructor() {
    this.#items = [];
  }

  getItems() {
    return [...this.#items];
  }

  addItem(...item) {
    this.#items.push(...item);
  }

  removeItem(item) {
    const index = this.#items.indexOf(item);
    if (index !== -1) {
      this.#items.splice(index, 1);
    }
  }

  modifyItem(itemToChange, newValue) {
    const index = this.#items.indexOf(itemToChange);

    if (index !== -1) {
      this.#items[index] = newValue;
    }
  }
}

const array = new BetterArray();
array.addItem("A", "B", "C");
console.log(array.getItems());
