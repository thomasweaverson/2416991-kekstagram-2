import { getData } from '../api/api.js';
import { initFilter } from '../filter/filter.js';
import { showDetails } from '../photo-details/photo-details.js';
import { findTemplateById, renderPack, showAlert } from '../utils/dom.js';

const thumbnailTemplate = findTemplateById('picture');
const gallery = document.querySelector('.pictures');

let photos = [];

const getPhotos = () => [...photos];

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
  const picture = evt.target.closest('.picture');
  const photoId = picture ? picture.dataset.photoId : null;
  if (photoId) {
    evt.preventDefault();
    showDetails(photos.find((photo) => photo.id === Number(photoId)));
  }
};
const clearGallery = () => {
  const pictures = gallery.querySelectorAll('.picture');
  for (const picture of pictures) {
    picture.remove();
  }
};

const renderPhotos = (thumbs) => {
  clearGallery();
  renderPack(thumbs, createThumbnail, gallery);
};

const initGallery = () => {
  getData()
    .then((loadedPhotos) => {
      photos = [...loadedPhotos];
      renderPhotos(photos);
      initFilter();
    })
    .catch(() => {
      showAlert();
    });
  gallery.addEventListener('click', onPictureClick);
};

export { getPhotos, initGallery, renderPhotos };

