/**
 * Напиши скрипт для обчислення площі прямокутника зі сторонами,
 * значення яких зберігаються у змінній values у вигляді рядка.
 * Значення гарантовано розділені пробілом.
 */

// const values = "8 11";
// const arr = values.split(" ");
// const result = Number(arr[0]) * Number(arr[1]);
// // const result = (+arr[0] + +arr[1]) * 2;
// console.log(result);





/**
 * Напиши скрипт для перебору масиву fruits.
 * Для кожного елемента масиву виведи в консоль рядок
 * у форматі номер_елемента: значення_елемента.
 * Нумерація елементів повинна починатися з 1.
 */

// const fruits = ["🍎", "🍇", "🍑", "🍌", "🍋"];

// for(let i = 0; i < fruits.length; i += 1) {
//     console.log(`${i + 1}: ${fruits[i]}`);
// }




// ----------------------------------------- 5

/**
 * Напиши скрипт, який підраховує суму всіх парних чисел у масиві.
 */

// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];
// let total = 0;



// for(const number of numbers) {
//     if(number % 2 !== 0) {
//         continue;
//     }

//     console.log(number);
//     total += number;
// }

// console.log("total", total);





/**
 * Напиши скрипт, який виводить у консоль ім'я та телефонний номер користувача.
 * У змінних names та phones зберігаються рядки імен та телефонних номерів,
 * розділені комами. Порядковий номер імен та телефонів у рядках вказують на
 * відповідність. Кількість імен та телефонів гарантовано однакова.
 */

// const names = "Jacob,William,Solomon,Artemis";
// const phones = "89001234567,89001112233,890055566377,890055566300";

// const tototo = names.split(",");
// const lalala = phones.split(",");

// for(let i = 0; i < tototo.length; i += 1) {
//     console.log(`${tototo[i]}: ${lalala[i]}`);
// }






/**
 * Напиши скрипт, який виводить у консоль усі слова рядка
 * крім першого і останнього. Результуючий рядок не повинен починатися
 * або закінчуватися символ пробілу.
 * Скрипт повинен працювати для будь-якого рядка.
 */

// const string = "Welcome to the future";

// const arr = string.trim().split(" ");
// const resultArr = arr.slice(1, arr.length - 1);
// const result = resultArr.join(" ").trim();

// console.log(result);









/**
 * Напиши скрипт пошуку найменшого числа у масиві. Код повинен працювати
 * для будь-якого масиву чисел. Використовуй цикл для розв'язання задачі.
 */

// const values = [26, 17, 94, 1, 23, 37];
// let min;

// for(let i = 0; i < values.length; i += 1) {
//     if(i === 0) {
//         min = values[i];
//     } else if(values[i] < min) {
//         min = values[i]
//     }
// }


// console.log(min);

