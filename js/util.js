//функция, получающая случайное число из диапазона чисел
const getRandom = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export {getRandom};
