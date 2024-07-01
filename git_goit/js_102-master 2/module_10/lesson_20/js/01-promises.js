/**
 * Створення та обробка промісу
 * - Клас Promise
 * - resolve
 * - reject
 * - then, catch, finally
 */


// const promise = new Promise((resolve, reject) => {
//     const random = Math.random();

//     setTimeout(() => {
//         if(random > 0) {
//             resolve(10);
//         } else {
//             reject(0);
//         } 
//     }, 2000)
// });

// promise
//     .then((res) => console.log("then", res))
//     .catch((error) => console.log("catch",error))
//     .finally(() => console.log("finally"))





// "Проміс виконався успішно, із результатом (виконаний, fulfilled)";
// "Проміс виконався з помилкою (відхилений, rejected)"




/**
 * Ланцюги промісів
 * - декілька послідовних then
 * - then повертає проміс
 */

// promise
//     .then(data => {
//         return data * 2;
//     })
//     .then(data => data / 5)
//     .then(res => console.log(res))
//     .catch(error => console.log(error))





// const startTime = Date.now();

// const pro1 = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const deltaTime = Date.now() - startTime;
//             resolve({ title: "pro1", time: deltaTime })
//         }, 5000)
//     });
// }

// const pro2 = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const deltaTime = Date.now() - startTime;
//             reject({ title: "pro2", time: deltaTime })
//         }, 2000)
//     });
// }

// const pro3 = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const deltaTime = Date.now() - startTime;
//             resolve({ title: "pro3", time: deltaTime })
//         }, 3000)
//     });
// }

// Promise.all([pro1(), pro2(), pro3()])
//     .then(data => console.log("then", data))
//     .catch(error => console.log("catch", error))

// Promise.race([pro1(), pro2(), pro3()])
//     .then(data => console.log("then", data))
//     .catch(error => console.log("catch", error))
















