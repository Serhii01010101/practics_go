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

const user = {
  tag: "Mango",
  showTag() {
    console.log("showTag -> this", this);
    console.log("showTag -> this.tag", this.tag);
  },
};

user.showTag();

const outerShowTag = user.showTag;
outerShowTag();
