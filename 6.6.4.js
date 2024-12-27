/*Задание 6.6.4: Крестики-нолики*/
const size = 3;
for (let i = 0; i < size; i++) {
  let row = "";
  for (let j = 0; j < size; j++) {
    if ((i + j) % 2 === 0) {
      row += "x ";
    } else {
      row += "o ";
    }
  }
  console.log(row.trim());
}
// Вывод:
// x o x
// o x o
// x o x
