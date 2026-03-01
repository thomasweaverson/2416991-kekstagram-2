import { findTemplateById, renderPack } from './utils/dom.js';

const pictureTemplate = findTemplateById('picture');
const container = document.querySelector('.pictures');

const createPicture = ({ comments, description, likes, url }) => {
  const picture = pictureTemplate.cloneNode(true);
  picture.querySelector('.picture__img').src = url;
  picture.querySelector('.picture__img').alt = description;
  picture.querySelector('.picture__comments').textContent = comments.length;
  picture.querySelector('.picture__likes').textContent = likes;
  return picture;
};

const renderGallery = (photos) => {
  renderPack(photos, createPicture, container);
};

export { renderGallery };
