import { showDetails } from './photo-details.js';
import { findTemplateById, renderPack } from './utils/dom.js';

const thumbnailTemplate = findTemplateById('picture');
const container = document.querySelector('.pictures');

const createThumbnail = ({ comments, description, likes, url }) => {
  const thumbnail = thumbnailTemplate.cloneNode(true);
  thumbnail.querySelector('.picture__img').src = url;
  thumbnail.querySelector('.picture__img').alt = description;
  thumbnail.querySelector('.picture__comments').textContent = comments.length;
  thumbnail.querySelector('.picture__likes').textContent = likes;

  thumbnail.addEventListener('click', (evt) => {
    evt.preventDefault();
    showDetails({ url, description, likes, comments });
  });
  return thumbnail;
};

const renderGallery = (photos) => {
  renderPack(photos, createThumbnail, container);
};

export { renderGallery };
