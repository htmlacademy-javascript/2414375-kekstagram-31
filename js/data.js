import {getRandom} from './util';

const MAX_ID = 25;

const MIN_LIKES = 15;
const MAX_LIKES = 200;

const MIN_AVATAR = 1;
const MAX_AVATAR = 6;

const MIN_COMMENT = 1;
const MAX_COMMENT = 30;

const DESCRIPTIONS = [
  'Фото 1',
  'Фото 2',
  'Фото 3',
  'Фото 4',
  'Фото 5',
];

const NAMES = [
  'Маша',
  'Лена',
  'Витя',
  'Дима',
  'Петя',
  'Оля',
  'Глеб',
];

const MASSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const addComment = (id) => ({
  id: id,
  avatar: `img/avatar-${getRandom(MIN_AVATAR, MAX_AVATAR)}.svg`,
  message: MASSAGES[getRandom(0, MASSAGES.length - 1)],
  name: NAMES[getRandom(0, NAMES.length - 1)],
});

//функция, создающая объект - описание комментария.
const addComments = () => {
  const comments = [];
  for (let i = 1; i <= getRandom(MIN_COMMENT, MAX_COMMENT); i++){
    comments.push(addComment(i)); // добавляет элемент внутрь массива
  }
  return comments;
};

//функция, создающая объект - описание фотографии, опубликованной пользователем.
const photos = [];
const addPhoto = (id) => ({
  id: id,
  url: `photos/${id}.jpg`,
  description: DESCRIPTIONS[getRandom(0, DESCRIPTIONS.length - 1)],
  likes: getRandom(MIN_LIKES, MAX_LIKES),
  comments: addComments(),
});

//функция, создающая массив объектов
const addPhotos = () => {
  for (let i = 1; i <= MAX_ID; i++){
    photos.push(addPhoto(i)); // добавляет элемент внутрь массива
  }
};

addPhotos();

export {photos};
