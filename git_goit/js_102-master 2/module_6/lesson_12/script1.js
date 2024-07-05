// class User {
//   constructor(name, age) {
//     this.userName = name;
//     this.userAge = age;
//   }
// }

// const inst = new User("Alice", 18);

// console.log(inst);
// class User {
//   constructor(name) {
//     this.name = name;
//   }
// }

// ********************************************************** ES6

// *

// class User {
//   constructor(name, email) {
//     this.name = name;
//     this.userEmail = email;
//   }
// }

// const alice = new User("Alice", "alice@gmail.com");

// ************************************************************  публичный свойства и методы

// class User {
//   constructor(name) {
//     this.name = name;
//   }

//   showName() {
//     console.log(`Hello my name is ${this.name}`);
//   }
// }

// const student = new User("Alice");
// console.log(student);
// student.showName();

// ************************************************************   Приватные свойства и методы

// class User {
//   #password;
//   constructor(name, password) {
//     this.name = name;
//     this.#password = password;
//   }

//   showName() {
//     if (this.#checkPassword()) {
//       console.log(`Hello my name is ${this.name}`);
//     } else {
//       console.log(`Who are you?`);
//     }
//   }

//   #checkPassword() {
//     const password = prompt();
//     return password === this.#password;
//   }
// }

// const student = new User("Alice", "qwerty111");

// console.log(student);

// student.showName();

// ************************************************************ геттеры и сеттеры

// class User {
//   #password;

//   #email;

//   constructor(name, password, email) {
//     this.name = name;
//     this.#password = password;
//     this.email = email;
//   }

//   showName() {
//     if (this.#checkPassword()) {
//       console.log(`Hello my name is ${this.name}`);
//     } else {
//       console.log(`Who are you?`);
//     }
//   }

//   #checkPassword() {
//     const password = prompt();
//     return password === this.#password;
//   }

//   get userEmail() {
//     if (this.#checkPassword()) {
//       return this.email;
//     }
//   }

//   set userEmail(newEmail) {
//     if (this.#checkPassword()) {
//       this.email = newEmail;
//     }
//   }
// }

// const student = new User("Alice", "qwerty111", "test@gmail.com");

// // console.log(student.email);

// student.userEmail = "new@gamil.com";

// console.log(student.userEmail);

// ************************************************************* статические свойства и методы

// ************************************************************* Практика
// class User {
//   #name;
//   #surname;

//   constructor(name, surname) {
//     this.#name = name;
//     this.#surname = surname;
//   }

//   getFullName() {
//     return `${this.#name} ${this.#surname}`;
//   }
// }

// class Student extends User {
//   constructor(name, surname, year) {
//     super(name, surname);

//     this.year = year;
//   }

//   getCourse() {
//     const currentTime = new Date();
//     const currentYear = currentTime.getFullYear();

//     const diff = currentYear - this.year;

//     if (diff > 5) {
//       return "Студент являється випускником";
//     }
//     return `${diff} course`;
//   }
// }

// const student = new Student("Петрик", "Пяточкин", 2018);

// console.log(student);
// console.log(student.getFullName());
// console.log(student.getCourse());

// ************************************************************* Practics

// class Rectangle {
//   #width;
//   #height;
//   constructor({ width, height } = {}) {
//     this.#height = height;
//     this.#width = width;
//   }

//   get height() {
//     return this.#height;
//   }

//   set height(newHeight) {
//     if (typeof newHeight === "number" && newHeight > 0) {
//       this.#height = newHeight;
//     } else {
//       console.log("this is not a number");
//     }
//   }
//   get width() {
//     return this.#width;
//   }

//   set width(newWidth) {
//     if (typeof newHeight === "number" && newWidth > 0) {
//       this.#width = newWidth;
//     } else {
//       console.log("this is not a number");
//     }
//   }
// }

// const item = new Rectangle({ width: 10, height: 5 });

// console.log(item.width);

// item.width = 12;

// console.log(item.width);

// item.height = 2;

// console.log(item.height);

// ************************************************************* Practics

// class User {
//   #name;
//   #surname;
//   constructor(name, surname) {
//     this.#name = name;
//     this.#surname = surname;
//   }

//   getFullName() {
//     return `${this.#name} ${this.#surname}`;
//   }
// }

// class Student extends User {
//   constructor(name, surname, year) {
//     super(name, surname);

//     this.year = year;
//   }

//   getCourse() {
//     const currentTime = new Date();
//     const currentYear = currentTime.getFullYear();

//     const diff = currentYear - this.year;

//     if (diff > 5) {
//       return `student is vipysknyc`;
//     }
//     return `${diff}`;
//   }
// }

// const student = new Student("Петрик", "Пяточкин", 2020);
// console.log(student);
// console.log(student.getFullName()); //поверне 'Петрик Пяточкин'
// console.log(student.getCourse()); //поверне 4

// ************************************************************* Practics

class Hero {
  static counter = 0;
  static addHero() {
    Hero.counter += 1;
    console.log(`${Hero.counter}`);
  }

  #level;
  constructor(name) {
    this.name = name;
    this.#level = 1;
    this.health = 200;
  }
  attack() {
    console.log("Attack with 10 damage");
  }
  heal() {
    this.health += 10;
  }
}

const bloodseker = new Hero("Bloodseker");

bloodseker.attack();
console.log(bloodseker);
console.log(bloodseker.health);
console.log(bloodseker);
