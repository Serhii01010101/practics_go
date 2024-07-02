// call // apply

// const showThis = function () {
//   console.log(`showThis -> this`, this);
// };

// const objA = {
//   a: 5,
//   b: 10,
// };

// showThis.call(objA);

// const changeColor = function (color) {
//   console.log((`changeColor -> this`, this));
// };

// const hat = {
//   color: `black`,
// };

// const sweater = {
//   color: `green`,
// };

// const changeColor = function (color) {
//   console.log(`changeColor -> this`, this);
//   this.color = color;
// };

// const hat = {
//   color: `black`,
// };

// changeColor.call(hat, `orange`);
// console.log(hat);

// const sweater = {
//   color: `green`,
// };

// changeColor.call(sweater, `blue`);
// console.log(sweater);

// Method bind

// const changeColor = function (color) {
//   console.log(`changeColor -> this`, this);
//   this.color = color;
// };

// const hat = {
//   color: `black`,
// };

// const sweater = {
//   color: `green`,
// };

// const changeHatColor = changeColor.bind(hat);
// const changeSweaterColor = changeColor.bind(sweater);

// changeColor();
// changeHatColor("yellow");
// console.log(hat);
// changeSweaterColor("red");
// console.log(sweater);

const counter = {
  value: 0,
  increment(value) {
    console.log(`increment -> this`, this);
    this.value += value;
  },

  decrement(value) {
    console.log(`decrement -> this`, this);
    this.value -= value;
  },
};

const updateCounter = function (value, operation) {
  operation(value);
};

// updateCounter(10, counter.increment.bind(counter));
// updateCounter(5, counter.decrement.bind(counter));
