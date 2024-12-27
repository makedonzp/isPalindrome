/*Задание 6.6.1: Палиндром*/
function isPalindrome(word) {
  const cleanedWord = word.replace(/\s+/g, "").toLowerCase();
  const reversedWord = cleanedWord.split("").reverse().join("");
  if (cleanedWord === reversedWord) {
    console.log(`Слово ${word} является палиндромом`);
  } else {
    console.log(`Слово ${word} не является палиндромом`);
  }
}

isPalindrome("Довод");
isPalindrome("Сантимент");
