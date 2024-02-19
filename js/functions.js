/*
Функция для проверки длины строки.
Она принимает строку, которую нужно проверить, и максимальную длину и возвращает true,
если строка меньше или равна указанной длине, и false, если строка длиннее.
Эта функция нам пригодится для валидации формы. Примеры использования функции:

// Строка короче 20 символов
имяФункции('проверяемая строка', 20); // true
// Длина строки ровно 18 символов
имяФункции('проверяемая строка', 18); // true
// Строка длиннее 10 символов
имяФункции('проверяемая строка', 10); // false
*/

const makeCheckLength = function(str, length) {
  if (str.length < length) {
    return true;
  }
};
console.log(makeCheckLength('строка', 20));

const makeCheckLength2 = function(str) {
  if (str.length === 18) {
    return true;
  } else {
    return false;
  }
};
console.log(makeCheckLength2('jhghccghg'));

const makeCheckLength3 = function(str) {
  if (str.length < 10) {
    return true;
  } else {
    return false;
  }
};
console.log(makeCheckLength3('jcghmmmmmmmmmmmg'));


