/*
 * Промісифікація:
 * - Проблема доступу до результату проміса з колбеком
 * - Функція, яка повертає проміс
 */

// const makeOrder = (dish, onSuccess, onError) => {
//   const random = Math.random();
//   console.log("random", random);

//   setTimeout(() => {
//     if(random > 0.5) {
//       onSuccess(`Ваше замовлення ${dish}`)
//     } else {
//       onError("Продукти закінчилися");
//     }
//   }, 1000)
// }

// makeOrder(
//   "пиріжок", 
//   (result) => {
//     console.log(result);
//   },
//   (error) => {
//     console.log(error);
//   }
// )


// const makeOrder = (dish) => {
//   return new Promise((resolve, reject) => {
//     const random = Math.random();

//     setTimeout(() => {
//       if(random > 0.5) {
//         resolve(`Ваше замовлення ${dish}`)
//       } else {
//         reject("Продукти закінчилися")
//       }
//     }, 1000)
//   });
// }


// makeOrder("пиріжок")
//   .then(result => console.log(result))
//   .catch(error => console.log(error))
//   .finally(() => console.log("finally"))


  
/*
  * Промісифікація «синхронних» функцій
  * - Promise.resolve()
  * - Promise.reject()
  */


// const makeOrder = (dish, onSuccess, onError) => {
//   const random = Math.random();

//   if(random > 0.5) {
//     onSuccess(`Ваше замовлення ${dish}`)
//   } else {
//     onError("Продукти закінчилися")
//   }
// }

// makeOrder(
//   "пиріжок", 
//   (result) => {
//     console.log(result);
//   },
//   (error) => {
//     console.log(error);
//   }
// )




// const makeOrder = (dish) => {
//   const random = Math.random();

//   if(random > 0.5) {
//     return Promise.resolve(`Ваше замовлення ${dish}`)
//   } else {
//     return Promise.reject("Продукти закінчилися")
//   }
// }

// makeOrder("пиріжок")
//   .then(response => console.log(response))
//   .catch(error => console.log(error))



// function strUppercase(str) {
//   console.log(str.toUpperCase());
// }

// function logger(result, callback) {
//   return callback(`${result}!!!`)
// }

// function addString(str, callback) {
//   return callback(`${str} world`)
// }

// function joinArr(arr, callback) {
//   return callback(arr.join(" "))
// }

// joinArr(["hello"], (str) => {
//   addString(str, (newStr) => {
//     logger(newStr, (addToStr) => {
//       strUppercase(addToStr)
//     })
//   })
// })


// function joinPromise(arr) {
//   return new Promise((resolve, reject) => {
//     resolve(arr.join(" "))
//   })
// }

// joinPromise(["hello"])
//   .then(result => `${result} world`)
//   .then(data => `${data}!!!`)
//   .then(str => str.toUpperCase())
//   .then(data => console.log(data))



// function loadScript(src, callback) {
//   const script = document.createElement("script");
//   script.src = src;

//   script.onload = () => callback(null, script);
//   script.onerror = () => callback(new Error("Помилка завантаження"));

//   document.head.append(script)
// }


// loadScript("./js/03-game.js", (error, script) => {
//   if(error) {
//     console.log(error);
//   } else {
//     console.log(script);
//   }
// })


// function promisify(foo) {
//   return function(...args) {
//     return new Promise((resolve, reject) => {
//       function callback(error, result) {
//         if(error) {
//           reject(error)
//         } else {
//           resolve(result)
//         }
//       }

//       args.push(callback);

//       foo.call(this, ...args);
//     })
//   }
// }


// const loadScriptPromise = promisify(loadScript);

// loadScriptPromise("./js/03-game.js")
//   .then(response => console.log(response))
//   .catch(error => console.log(error))










