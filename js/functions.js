/*
// Строка короче 20 символов
имяФункции('проверяемая строка', 20); // true
// Длина строки ровно 18 символов
имяФункции('проверяемая строка', 18); // true
// Строка длиннее 10 символов
имяФункции('проверяемая строка', 10); // false
*/

const makeCheckLength = function(str, length, arg) {
  if (arg === 'bigger') {
    return (str.length < length);
  } else if(arg === 'equal') {
    return (str.length === 18);
  } else if (arg === 'smaller') {
    return (str.length > 10);
  }
};

console.log(makeCheckLength('строка', 20, 'bigger'));
console.log(makeCheckLength('jhghcgiuytrfgtyhgj', 18, 'equal'));
console.log(makeCheckLength('jcgh', 10, 'smaller'));

/*
// Строка является палиндромом
имяФункции('топот'); // true
// Несмотря на разный регистр, тоже палиндром
имяФункции('ДовОд'); // true
// Это не палиндром
имяФункции('Кекс');  // false
*/

function isPal(str) {
  str = str.toLowerCase();
  str = str.replaceAll(' ','');
  let reversed = '';
  for(let i = str.length - 1; i >= 0; i--) {
    reversed = reversed + str[i];
  }
  return reversed === str;
}
console.log(isPal('топот'));
console.log(isPal('ДовОд'));
console.log(isPal('Кекс'));
console.log(isPal('Лёша на полке клопа нашёл'));
