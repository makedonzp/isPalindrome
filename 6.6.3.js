/*Задание 6.6.3: Массив от 0 до N*/
const userInput = prompt("Введите число:");
const number = Number(userInput);
const resultArray = [];

for (let i = 0; i <= number; i++) {
  resultArray.push(i);
}

console.log(resultArray);
