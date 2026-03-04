import { mocks } from '../mocks/mocks.js';
import { showDetails } from '../photo-details/photo-details.js';
import { findTemplateById, renderPack } from '../utils/dom.js';

const thumbnailTemplate = findTemplateById('picture');
const gallery = document.querySelector('.pictures');

const createThumbnail = ({ comments, description, likes, url, id }) => {
  const thumbnail = thumbnailTemplate.cloneNode(true);
  thumbnail.dataset.photoId = id;
  thumbnail.querySelector('.picture__img').src = url;
  thumbnail.querySelector('.picture__img').alt = description;
  thumbnail.querySelector('.picture__comments').textContent = comments.length;
  thumbnail.querySelector('.picture__likes').textContent = likes;
  return thumbnail;
};

const onPictureClick = (evt) => {
  const photos = mocks.getPhotos();
  const picture = evt.target.closest('.picture');
  const photoId = picture ? picture.dataset.photoId : null;
  if (photoId) {
    evt.preventDefault();
    showDetails(photos.find((photo) => photo.id === Number(photoId)));
  }
};

const renderGallery = () => {
  const photos = mocks.getPhotos();
  gallery.addEventListener('click', onPictureClick);
  renderPack(photos, createThumbnail, gallery);
};

export { renderGallery };
