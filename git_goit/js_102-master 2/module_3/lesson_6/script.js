
// -------------------------------- 4

/**
 * Напиши функцію logItems(items), яка отримує масив та використовує цикл,
 * який для кожного елемента масиву буде виводити в консоль повідомлення у
 * форматі <номер елемента> - <значення елемента>. Нумерація елементів
 * повинна починатися з 1.
 *
 * Наприклад для першого елемента масиву ['Mango', 'Poly', 'Ajax'] з
 * індексом 0 буде виведено 1 - Mango, а для індексу 2 виведе 3 - Ajax.
 */

// function logItems(arr) {
//     for(let i = 0; i < arr.length; i += 1) {
//         console.log(`${i + 1} - ${arr[i]}`);
//     }
// }

// logItems(["Mango", "Poly", "Ajax"]);
// logItems(["🍎", "🍇", "🍑", "🍌", "🍋"]);







/**
 * Напиши функцію printInfo(names, phones) яка виводить
 * у консоль ім'я та телефонний номер користувача. У параметри
 * names та phones будуть передані рядки імен та телефонних номерів,
 * розділені комами. Порядковий номер імен та телефонів у рядках
 * вказують на відповідність. Кількість імен та телефонів
 * гарантовано однакова.
 */

// function printInfo(names, phones) {
//     const namesArr = names.split(",");
//     const phonesArr = phones.split(",");

//     for(let i = 0; i < namesArr.length; i += 1) {
//         console.log(namesArr[i], phonesArr[i]);
//     }
// }

// printInfo(
//     "Jacob,William,Solomon,Artemis",
//     "89001234567,89001112233,890055566377,890055566300"
//   );





/**
 * Напиши функцію formatTime(minutes) яка переведе значення
 * minutes (кількість хвилин) у рядок у форматі годин
 * та хвилин HH:MM.
 */

// function formatTime(totalMinutes) {
//     const hours = Math.floor(totalMinutes / 60);
//     const minutes = totalMinutes % 60;

//     const doubleHours = String(hours).padStart(2, 0);
//     const doudleMinutes = String(minutes).padStart(2, 0)
//     return `${doubleHours}:${doudleMinutes}`
// }

// console.log(formatTime(45))
// console.log(formatTime(460))
// console.log(formatTime(1441))






// Створити функцію яка буде розбивати початковий масив 
// на потрібну кількість елементів розділюячи на декілька 
// масивів.Функція приймає 2 параметри
// 1 - масив значень
// 2 - потрібну кількість елементіа в масиві
//  Функція повертає масив масивів


// const data = [1, 2, 3, 4, 5, 6, 7, 8, 9]


// function foo(arr, count) {
//     let res = [];
//     for(let i = 0; i < arr.length; i += count) {
//         const comb = arr.slice(i, i + count);
//         res.push(comb);
//     }
//     return res;
// }


// console.log(foo(data, 3));
