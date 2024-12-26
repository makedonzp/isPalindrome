/*Задание 6.6.1: Палиндром*/
// function isPalindrome(word) {
//   const cleanedWord = word.replace(/\s+/g, "").toLowerCase();
//   const reversedWord = cleanedWord.split("").reverse().join("");
//   if (cleanedWord === reversedWord) {
//     console.log(`Слово ${word} является палиндромом`);
//   } else {
//     console.log(`Слово ${word} не является палиндромом`);
//   }
// }

// isPalindrome("Довод");
// isPalindrome("Сантимент");

/*Задание 6.6.2: Уникальные значения массива*/
// const arr = [
//   1,
//   2,
//   3,
//   1,
//   5,
//   4,
//   2,
//   3,
//   5,
//   "they",
//   "don't",
//   "know",
//   "that",
//   "we",
//   "know",
//   "that",
//   "they",
//   "know",
// ];
// const uniqueArr = [...new Set(arr)];
// console.log(uniqueArr);
/*Задание 6.6.3: Массив от 0 до N*/
// const userInput = prompt("Введите число:");
// const number = Number(userInput);
// const resultArray = [];

// for (let i = 0; i <= number; i++) {
//   resultArray.push(i);
// }

// console.log(resultArray);
/*Задание 6.6.4: Крестики-нолики*/
// const size = 3;
// for (let i = 0; i < size; i++) {
//   let row = "";
//   for (let j = 0; j < size; j++) {
//     if ((i + j) % 2 === 0) {
//       row += "x ";
//     } else {
//       row += "o ";
//     }
//   }
//   console.log(row.trim());
// }
// Вывод:
// x o x
// o x o
// x o x
/*ЗЗадание 6.6.5: Значения всех ключей объекта*/
// const obj = {
//   some: "some",
//   dom: "text",
//   arr: [1, 2, 3, 4, 5],
//   tom: "there",
// };

// const arrValues = [];

// for (const key in obj) {
//   if (Array.isArray(obj[key])) {
//     arrValues.push(...obj[key]);
//   } else {
//     arrValues.push(obj[key]);
//   }
// }

// console.log(arrValues);
/*ЗЗадание 6.6.5: Значения всех ключей объекта*/
