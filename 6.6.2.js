/*Задание 6.6.2: Уникальные значения массива*/
const arr = [
  1,
  2,
  3,
  1,
  5,
  4,
  2,
  3,
  5,
  "they",
  "don't",
  "know",
  "that",
  "we",
  "know",
  "that",
  "they",
  "know",
];
const uniqueArr = [...new Set(arr)];
console.log(uniqueArr);
