/*
  id:  //число от 1 до 25 не должны повторяться,
  url: //строка — адрес картинки вида photos/{{i}}.jpg, где {{i}} — это число от 1 до 25. не должны повторяться
  description: // строка — описание фотографии. Описание придумайте самостоятельно.
  likes: // число — количество лайков, поставленных фотографии. Случайное число от 15 до 200.
  comments: // массив объектов — список комментариев, оставленных другими пользователями к этой фотографии.
           //Количество комментариев к каждой фотографии — случайное число от 0 до 30. генерируются случайным образом.

*/

const MIN_ID = 1;
const MAX_ID = 25;

const MIN_LIKES = 15;
const MAX_LIKES = 200;

const MIN_AVATAR = 1;
const MAX_AVATAR = 6;

const MIN_COMMENT = 0;
const MAX_COMMENT = 30;

const DESCRIPTION = [
  'Фото 1',
  'Фото 2',
  'Фото 3',
  'Фото 4',
  'Фото 5',
];

const NAME = [
  'Маша',
  'Лена',
  'Витя',
  'Дима',
  'Петя',
  'Оля',
  'Глеб',
];

const MASSAGE = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

//функция, получающая случайное число из диапазона чисел
function getRandom (min, max) {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

//функция, создающая объект - описание комментария.
const createComment = () => {
  return {
    id: getRandom(MIN_ID, MAX_ID),
    avatar: `img/avatar-${getRandom(MIN_AVATAR, MAX_AVATAR)}.svg`,
    message: MASSAGE[getRandom(0, MASSAGE.length - 1)],
    name: NAME[getRandom(0, NAME.length - 1)],
  };
};

const similarComments = Array.from({length: getRandom(MIN_COMMENT, MAX_COMMENT)}, createComment); //массив случайных комментариев
//const totalComments = similarComments[randomComment];
const totalComments = similarComments;

console.log(totalComments);

//функция, создающая объект - описание фотографии, опубликованной пользователем.
const descriptionPhoto = () => {
  return {
    id: getRandom(MIN_ID, MAX_ID),
    url: `photos/${getRandom(MIN_ID, MAX_ID)}.jpg`,
    description: DESCRIPTION[getRandom(0, DESCRIPTION.length - 1)],
    likes: getRandom(MIN_LIKES, MAX_LIKES),
    comments: totalComments,//
  };
};

const similarPhotos = Array.from({length: 25}, descriptionPhoto);

console.log(similarPhotos);
