"use strict";

// function foo() {
//   console.log("this", this);
// }

// foo();

// контекст метода обьекта

// const user = {
//   name: "Alice",
//   showThis() {
//     console.log("this", this);
//   },
// };

// user.showThis();

// контекст метода обьекта, но вызвана как внешняя функция

// function showThis() {
//   console.log("this", this);
// }

// const user = {
//   name: "Alice",
// };

// user.foo = showThis;

// console.log(user);

// вызов без контекста, но обьявлена как метод обьекта

// const user = {
//   name: "Alice",
//   showThis() {
//     console.log("this", this);
//   },
// };

// const foo = user.showThis;

// foo();

// контекст у коллбек функциях

// const user = {
//   name: "Alice",
//   showThis() {
//     console.log("this", this);
//   },
// };

// function foo(callback) {
//   callback();
// }

// foo(user.showThis);

//

// const book = {
//   title: "React",
//   showThis() {
//     console.log("this", this);
//   },
//   showTitle() {
//     console.log("this", this.title);
//   },
// };

// book.showThis();

// book.showTitle();

// const show = book.showTitle;
// show();

//

//

// const chopShop = {
//   stones: [
//     { name: "Emerald", price: 1300, quantity: 4 },
//     { name: "Diamond", price: 2700, quantity: 3 },
//     { name: "Saphire", price: 1400, quantity: 7 },
//     { name: "Ruby", price: 800, quantity: 2 },
//   ],

//   calcTotalPrice(stoneName) {
//     const stone = this.stones.find((item) => item.name === stoneName);

//     if (!stone) {
//       return `${stoneName} not found`;
//     }
//     return stone.price * stone.quantity;
//   },
// };

// console.log(chopShop.calcTotalPrice("Emerald"));

//

//

//

// function foo(a, b, arr) {
//   console.log(a, b, arr);
//   console.log("this", this);
// }

// const petya = {
//   name: "Petya",
// };

// const alice = {
//   name: "Alice",
// };

// foo.call(alice, 10, "hello", [1, 2, 3]);

//

//

// function changeColor(color) {
//   console.log("this", this);
//   this.color = color;
// }

// const hat = {
//   color: "black",
// };

// const sweater = {
//   color: "blue",
// };

// changeColor.call(hat, "read");
// changeColor.apply(sweater, ["green"]);

// console.log(hat);
// console.log(sweater);

// const changeHat = changeColor.bind(hat);
// changeHat("pink");
// console.log(hat);

//

//

//

// const counter = {
//   value: 0,
//   increment(num) {
//     console.log("increment", this);
//     this.value += num;
//   },
//   decriment(num) {
//     console.log("decriment", this);
//     this.value -= num;
//   },
// };

// function update(value, callback) {
//   console.log(callback);
//   callback(value);
// }

// update(10, counter.increment.bind(counter));
// update(3, counter.decriment.bind(counter));

//

//

//

//

// прототипы обьекта
// Object.create()
//

// const animal = {
//   legs: 4,
// };

// const dog = Object.create(animal);
// dog.name = "Sharik";
// console.log(dog.legs);

// console.log(dog.hasOwnProperty("legs"));

// for (const key in dog) {
//   if (dog.hasOwnProperty(key)) {
//     console.log(key);
//   }
// }

// const keys = Object.keys(dog);

// console.log(keys);

//

//

//

//

// const objC = { c: "objC" };

// const objB = Object.create(objC);
// objB.b = "objB";

// const objA = Object.create(objB);
// objA.a = "objA";

// console.log("a", objA);
// console.log("b", objB);
// console.log("c", objC);

// console.log(objA.b);

//

//

//

// Наше завдання написати програмне забезпечення для автомобіля, а саме натискання кнопки набору та зниження швидкості в системі круїз контролю.
// Створити об'єкт cruiseСontrol з методами accelerate та decrease, властивостями speed та brand.

// const cruiseControl = {
//     speed: 0,
//     brand: "Audi",
//     accelerate() {
//         this.speed += 10;
//         console.log(`Автомобіль ${this.brand} прискорюється. Швидкість ${this.speed}`);
//     },
//     decrease() {
//         if(this.speed <= 0) {
//             console.log('Авто запинилось');
//             return;
//         }
//         this.speed -= 10;
//         console.log(`Автомобіль ${this.brand} гальмує. Швидкість ${this.speed}`);
//     }
// }

// cruiseControl.accelerate()
// cruiseControl.accelerate()

// cruiseControl.decrease()
// cruiseControl.decrease()
// cruiseControl.decrease()

// console.log(cruiseControl);

// Потрібно створити функціонал для контролю швидкості прокатних авто.
// Створіть функцію яка буде приймати 1 параметр (максимально дозволену швидкість)
// та виводити повідомлення, чи ми рухаємось з безпечною швидкістю чи перевищуємо, функція має опрацьовувати об'єкт автомобіля як this

// const SAFE_SPEED = 60;

// const tesla = {
//     brand: "tesla",
//     speed: 30
// }

// const bmw = {
//     brand: "BMW",
//     speed: 70
// }

// function speedSensor(maxSpeed) {
//     // if(this.speed <= maxSpeed) {
//     //     return `автомобіль ${this.brand} рухаєтсяь з безпечною швидкістю`;
//     // }

//     // return `${this.brand} - Перевищено швидкість`;

//     return this.speed <= maxSpeed ?
//     `автомобіль ${this.brand} рухаєтсяь з безпечною швидкістю` :
//     `${this.brand} - Перевищено швидкість`;
// }

// console.log(speedSensor.call(tesla, SAFE_SPEED));
// console.log(speedSensor.call(bmw, SAFE_SPEED));
