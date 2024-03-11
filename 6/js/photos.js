import { photos } from './data.js';

const template = document.querySelector('#picture').content.querySelector('.picture');
const pictures = document.querySelector('.pictures');

const renderPhoto = (photo) => {
  const pictureElement = template.cloneNode(true);
  const image = pictureElement.querySelector('.picture__img');

  image.src = photo.url;
  image.alt = photo.description;

  pictureElement.querySelector('.picture__comments').textContent = photo.comments.length;
  pictureElement.querySelector('.picture__likes').textContent = photo.likes;

  return pictureElement;
};

const fragment = document.createDocumentFragment();

const renderPhotos = (objects) => {
  objects.forEach((item) => {
    fragment.appendChild(renderPhoto(item));
  });
  pictures.appendChild(fragment);
};

export {renderPhotos};
