/*
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
console.log(makeCheckLength2('jhghcgiuytrfgtyhgj'));

const makeCheckLength3 = function(str) {
  if (str.length < 10) {
    return true;
  } else {
    return false;
  }
};
console.log(makeCheckLength3('jcghmmmmmmmmmmmg'));

/*
// Строка является палиндромом
имяФункции('топот'); // true
// Несмотря на разный регистр, тоже палиндром
имяФункции('ДовОд'); // true
// Это не палиндром
имяФункции('Кекс');  // false
*/

function isPal(str) {
  let reversed = '';
  for(let i = str.length - 1; i >= 0; i--) {
    reversed = reversed + str[i];
  }
  return reversed === str;
}
console.log(isPal('топот'));


function isPal2(str) {
  str = str.toLowerCase();
  let reversed = '';
  for(let i = str.length - 1; i >= 0; i--) {
    reversed = reversed + str[i];
  }
  return reversed === str;
}
console.log(isPal2('ДовОд'));

function isPal3(str) {
  let reversed = '';
  for(let i = str.length - 1; i >= 0; i--) {
    reversed = reversed + str[i];
  }
  return reversed === str;
}
console.log(isPal3('Кекс'));


function isPal4(str) {
  str = str.replaceAll(' ','');
  str = str.toLowerCase();
  let reversed = '';
  for(let i = str.length - 1; i >= 0; i--) {
    reversed = reversed + str[i];
  }
  return reversed === str ? 'yes' : 'no';
}
console.log(isPal4('ДовОд'));
