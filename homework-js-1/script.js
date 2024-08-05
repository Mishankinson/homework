// Якщо змінна більше нуля - виведіть true, менше - false
//Перевірте це на варіантах 1, 0, -3.

// console.log(1 > 0);

// if (1 > 0) {
//   console.log("true");
// } else {
//   console.log("false");
// }

// console.log(0 > 0);

// if (0 > 0) {
//   console.log("true");
// } else {
//   console.log("false");
// }
// console.log(-3 > 0);

// if (-3 > 0) {
//   console.log("true");
// } else {
//   console.log("false");
// }

///////////////////////////////////////////////////////////////

// Якщо змінна ="test" - виведіть true,
//Перевірте це на варіантах 'test',"qwerty", true

// let variant = "test";
// if (variant === "test") {
//   console.log(true);
// }

// let variant = 'test';
// if (variant === "test") {
//   console.log(true);
// }

// let variant = "qwerty";
// if (variant === "test") {
//   console.log(true);
// }

// let variant = true;
// if (variant === "test") {
//   console.log(true);
// }

///////////////////////////////////////////////////////////////

// Якщо змінна більше 10 - відніміть 5,
// менше - додайте 5, результат виведіть в консоль
// Перевірте це на варіантах 1, 10, 13.

// let num = 1;
// if (num > 10) {
//   console.log(num - 5);
// } else if (num < 10) {
//   console.log(num + 5);
// }

// let num = 10;
// if (num > 10) {
//   console.log(num - 5);
// } else if (num < 10) {
//   console.log(num + 5);
// }

// let num = 13;
// if (num > 10) {
//   console.log(num - 5);
// } else if (num < 10) {
//   console.log(num + 5);
// }

///////////////////////////////////////////////////////////////

//Зробіть сервіс який отримує число від 1 до 12
// виведіть місяць який дорівнює числу

// function getRandomInt(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min) + min);
// }

// const randomInt = getRandomInt(1, 13);
// switch (randomInt) {
//   case 1:
//     month = "січень";
//     break;
//   case 2:
//     month = "лютий";
//     break;
//   case 3:
//     month = "березень";
//     break;
//   case 4:
//     month = "квітень";
//     break;
//   case 5:
//     month = "травень";
//     break;
//   case 6:
//     month = "червень";
//     break;
//   case 7:
//     month = "липень";
//     break;
//   case 8:
//     month = "серпень";
//     break;
//   case 9:
//     month = "вересень";
//     break;
//   case 10:
//     month = "жовтень";
//     break;
//   case 11:
//     month = "листопад";
//     break;
//   case 12:
//     month = "грудень";
//     break;
// }
// console.log(month);

///////////////////////////////////////////////////////////////

//Зробіть сервіс який отримує тризначне число
//Поверніть користувачу сумму цих чисел

// function getRandomInt(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min) + min);
// }

// const randomInt = getRandomInt(100, 1000);
// console.log(randomInt);

// function sumOfDigits(randomInt) {
//   const digits = randomInt.toString().split("");
//   const sum = digits.reduce((acc, digit) => acc + parseInt(digit), 0);
//   return sum;
// }

// const sum = sumOfDigits(randomInt);
// console.log(`Сума чисел: ${sum}`);
