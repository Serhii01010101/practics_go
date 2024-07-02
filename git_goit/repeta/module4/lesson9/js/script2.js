class Car {
  constructor({ brand, model, price } = {}) {
    console.log(`Выполняеться конструткор`);
    console.log(this);

    this.brand = brand;
    this.model = model;
    this.price = price;
  }

  changePrice(newPrice) {
    this.price = newPrice;
  }

  updateModel(newModel) {
    this.model = newModel;
  }
}

console.dir(Car);

const carInstance = new Car({
  brand: "Audi",
  model: "Q3",
  price: 35000,
});

console.log(carInstance);
