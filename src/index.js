import './style.css';
import './main.scss';

console.log("It works!");

let n = parseInt(prompt("Введите число"));

console.log("Цикл остановлен")

// for (let i=2; i<=n; i += 2) {
//     console.log(i)
// } //number 1

// if (n % 2 === 0) {
//     n = n -1;
// }
//  for (let i=n; i>0; i -= 2) {
//      console.log(i)
// } //number 2

// let i=1;
// while(i <= n) {
//     if (n % i === 0) {
//         console.log(i)
//     }
//     i++;
// } //number 3

// let percent = parseInt(prompt("Введите число"));

// let deposit = 1;
// let years = 0;

// while(deposit < 2) {
//     years++;
//     deposit = deposit * (1 + (percent / 100));
//     console.log(`Значение ${deposit}`);
// }

// console.log(`Вклад удвоится через ${years} лет`)
//number 4

// let counter = 0;

// while (counter < 10) {
//     let n = Math.floor(Math.random() * 20 + 1);

//     if (n % 4) {
//         console.log(n);
//         counter++;
//     }
// }
//number 5