// const showTag = function () {
//   console.log("showTag -> this", this);
//   console.log("showTag -> this.tag", this.tag);
// };

// const user = {
//   tag: "Mango",
// };

// user.showUserTag = showTag;

// console.log("user", user);

// user.showUserTag();

// const user = {
//   tag: "Mango",
//   showTag() {
//     console.log("showTag -> this", this);
//     console.log("showTag -> this.tag", this.tag);
//   },
// };

// user.showTag();

// const outerShowTag = user.showTag;

// outerShowTag();

// const user = {
//   tag: "Mango",
//   showTag() {
//     console.log("showTag -> this", this);
//     console.log("showTag -> this.tag", this.tag);
//   },
// };

// user.showTag();

// const xyz = user.showTag;
// xyz();

// const invokeAction = function (action) {
//   console.log(action);

//   action();
// };

// invokeAction(user.showTag);

// const counter = {
//   value: 0,
//   increment(value) {
//     console.log(`increment -> this`, this);
//     this.value += value;
//   },

//   decrement(value) {
//     console.log(`decrement -> this`, this);
//     this.value -= value;
//   },
// };

// const updateCounter = function (value, operation) {
//   operation(value);
// };

// updateCounter(10, counter.increment);
// updateCounter(5, counter.decrement);

// const fn = function () {
//   return 5;
// };

// console.log(fn());
// console.log(fn);
