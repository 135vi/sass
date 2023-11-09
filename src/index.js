// import './style.css';
// import './main.scss';

// console.log("It works!");













































// class Rectangle {
//     constructor(topleft, bottomright) {
//         if(topleft instanceof Array && bottomright instanceof Array) {
//             this.topleft = topleft;
//             this.bottomright = bottomright;
//         }else {
//             throw new Error("Неверный формат координат")
//         }
//     }
//     showInfo() {
//         console.log(
//             `
//              Левая верхняя точка: [${this.topleft.join(' ')}]
//              Правая верхняя точка: [${this.bottomright[0]} ${this.topleft[1]}]
//              Левая верхняя точка: [${this.topleft[0]} ${this.bottomright[1]}]
//              Правая верхняя точка: [${this.bottomright.join(' ')}]
//             `
//         )
//     }

//     get width() {
//         return this.bottomright[0] - this.topleft[0]
//     }
//     get height() {
//         return this.bottomright[1] - this.topleft[1]
//     }
//     get square() {
//         return this.width * this.height
//     }
//     get perimeter() {
//         return (this.width + this.height) * 2
//     }

//     changewidth(n) {
//         this.bottomright = [this.bottomright[0] + n, this.bottomright[1]]
//     }
// }

// let rect = new Rectangle([2,3], [8,9])
// console.log(rect.showInfo())
// console.log(rect.width)
// console.log(rect.height)
// console.log(rect.square)
// console.log(rect.perimeter)

// rect.changewidth(-2)
// console.log(rect.perimeter)









// let arr = [0,1,2,3,4,5];
// function getidxs(arr, num) {

//     let i = 0;
//     let j = arr.length - 1;
//     while (i < j) {
//         if(arr[i] + arr[j] < num) {
//             i++
//         }else if(arr[i] + arr[j] > num) {
//             j--
//         }else if(arr[i] + arr[j] === num) {
//             return [i, j]
//         }
//     }
//     return [];

    // for(let i = 0; i < arr.length - 1; i++) {
    //     for(let j = i+1; j < arr.length; j++) {
    //         if(arr[i] + arr[j] === num) return [i, j]
    //     }
    // }
    // return []
// }
// console.log(getidxs(arr, 7).join(", "))



// let arr = [8,3,-6,5,-12]; //1
// let arr = "2,5,-6,4,-12" //2
// arr = arr.split(",").map(item => Number(item)) //2

// number 4
// function maxofarray(arr) {
//     return arr.reduce((max, item) => (item > max) ? item : max)
// }
// console.log(maxofarray(arr))


// number 3
// function sumArray(arr) {
//     return arr.reduce((sum, item) => sum + item) 
// }
// console.log(
//     sumArray(arr)
// )


// number 2
// function displayeven(arr) {
//     arr.forEach(item => {
//         if (item % 2 === 0) {
//             console.log(item)
//         }
//     });
// }
// displayeven(arr)


// function myFilter(arr, fn) {
//     let output = []

//     for(let i=0; i<arr.length; i++) {
//         if(fn(arr[i], i, arr)) output.push(arr[i]);
//     }

//     return output
// }

// number 1
// function displayArray(arr) {
//     arr.forEach(element => {
//         console.log(element)
//     });
// }
// displayArray(/*arr*/ myFilter(arr, item => !(item % 2)))












// let n = parseInt(prompt("Введите число"));

// console.log("Цикл остановлен")

// function is2(n) {
//     if(n === 0) return false;
//     if(n <= 2) return true;
//     if(n % 2) return false;
//     return is2(n / 2)
// }
// console.log(is2(32))


// function min() {
//     let minimum = arguments[0]
//     for(let i=1; i<arguments.length; i++) {
//         if(arguments[i] < minimum) minimum = arguments[i]
//     }
//     return minimum
// }
// console.log(min(2,-9,5,-3))


// function stringFrom() {
//     let result = arguments[0]
//     for (let i=1; i<arguments.length; i++) {
//         result = result + " " + arguments[i]
//     }
//     return result;
// }
// console.log(stringFrom('I have', 5, 'apples'))


// function factorial(n) {
//     if(n <= 2) return n;
//     return n * factorial(n-1)
// }

// function Fibonacci(n) {
//     if(n < 3) return 1;
//     return Fibonacci(n-1) + Fibonacci(n-2);
// }
// console.log(Fibonacci(8))


// let x = 1;
// function logX(){
//     console.log(typeof x);
// }
// logX()


// function parity(x) {
//     if(x % 2 == 0)   
//     parity = "even";
//     else
//     parity = "odd";
// }
// console.log(parity(3));
// console.log(parity(2));


// function mean() {
//     if(!arguments.length) return 0;
//     sum = 0;
//     for(i=0;i<arguments.length;i++)
//     sum += arguments[i];
//     return sum / arguments.length;
// }
// console.log(mean())


// function logArguments() {
//     for(i=0; i<arguments.length; i++)
//     console.log(`argument ${(i+1)} = ${i++}`)
// }
// logArguments(1,2,3)
// logArguments("text")






















// function mulTab(x) {
//     let i = 2;
//     while (i <= 9) {
//         console.log(`${x} * ${i} = ${x*i}`);
//         i++
//     }
// }


// function isSimple(x) {
//     if (Math.abs(x) <= 1) return false;
    
//     for(let i=2; i<x; i++) {
//         if(x % i === 0) return false 
//     }

//     return true
// }

// console.log(
//     isSimple(7)
// )

// function sign(x, y, op) {
//     switch(op) {
//         case "+":
//             return x + y;
//         case "-":
//             return x - y;
//         case "/":
//             return x / y;
//         case "*":
//             return x * y;
//         default:
//             return false
//     }
// }

// console.log(
//     sign(2, 3, "-")
//)


// function sayError() {
//     alert("Some error occurred!");
// }

// sayError();

// function checkPassword(x) {
//     if(x === "step" || x === "web" || x === "JavaScript") {
//         return true
//     } else {
//         return false
//     }
// }

// console.log(checkPassword("step"))
// console.log(checkPassword("web"))
// console.log(checkPassword("ded"))
// console.log(checkPassword("Javascript"))

// function sign(x) {
//     if(x < 0) return -1;
//     if(x > 0) return 1;
//     if(x === 0) return 0;
// }

// console.log(sign(0))

// function sign(x) {
//     switch(x) {
//         case 0: 
//             return "Sunday";
//             break
//         case 1:
//             return "Monday";
//         default:
//             return "Saturday" ;
//     }
// }

// console.log(sign())




// function getRandom(count, limit) {
//     let counter = 0;

//     while (counter < count) {
//        let n = getRandomNumber(limit);
//        if (n % 4) {
//             console.log(n);
//             counter++;
//        }
//     }
//     console.log("Цикл остановлен");
// }

// function getRandomNumber(limit) {
//     // return Math.floor(Math.random() * limit + 1);
//     let random = Math.random();
//     random = random * limit + 1;
//     let result = Math.floor(random);
//     return result
// }

// getRandom(3, 100);
// let n = getRandomNumber;

// console.log(n)



// for (let i=2; i<=n; i += 2) {
//     console.log(i)
// } //number 1

// for (let i=n; i>0; i -= 2) {
//     console.log(i)
// }

// if (n % 2 === 0) {
//     n = n -1;
// }
//  for (let i=n; i>0; i -= 2) {
//      console.log(i)
// } //number 2

// for (let i=n; i>0; i -= 1) {
//     if (i % 2 === 1) {
//         console.log(i)
//     }
// }

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


//const fruit = ["apple", "banana", "orange", "grape"];

// for (var i=0; i<5; i++) {
//     // тело цикла
//     console.log(i)
// }

// console.log(`Сейчас i = ${i}`)


//let i = 0; 


// while (i < 5) {
//     console.log(i);
//     i++;
// }


// do {
//     console.log(i);
//     i++;
// } while (i < 5)

// for (let i=0; i<5; i++) {
//     // тело цикла
//     console.log(i)
//     if (i == 2)  {
//         continue;
//     }
//     console.log(i)
// }

// loopI: for (let i=0; i<5; i++) {
//     loopJ: for (let j=0; j<5; j++) {
//         console.log(i,j);
//         if(j===3) {
//             continue loppI
//         }
//     }
// }























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