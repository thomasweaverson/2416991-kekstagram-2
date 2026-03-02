import { renderComments, resetComments } from './comments';
import { isEnterKey, isEscapeKey } from './utils/dom';

const detailsElement = document.querySelector('.big-picture');
const commentsShown = document.querySelector('.social__comment-shown-count');
const commentsTotal = document.querySelector('.social__comment-total-count');
const detailsCloseButton = detailsElement.querySelector('.big-picture__cancel');

const hideDetails = () => {
  detailsElement.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onEscapeKeydown);
  document.removeEventListener('keydown', onDetailsCloseButtonEnterKeydown);
  resetComments();
};

function onCloseButtonClick(evt) {
  evt.preventDefault();
  hideDetails();
}

function onOverlayClick(evt) {
  if (evt.target === detailsElement) {
    hideDetails();
  }
}

function onDetailsCloseButtonEnterKeydown(evt) {
  if (isEnterKey(evt) && evt.target === detailsCloseButton) {
    evt.preventDefault();
    hideDetails();
  }
}

function onEscapeKeydown (evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    hideDetails();
  }
}

const renderDetails = ({ url, description, likes, comments }) => {
  detailsElement.querySelector('.big-picture__img img').src = url;
  detailsElement.querySelector('.big-picture__img img').alt = description;
  detailsElement.querySelector('.social__caption').textContent = description;
  detailsElement.querySelector('.likes-count').textContent = likes;
  commentsShown.textContent = 0;
  commentsTotal.textContent = comments.length;
};

const showDetails = (photo) => {
  detailsElement.classList.remove('hidden');
  document.body.classList.add('modal-open');

  document.addEventListener('keydown', onEscapeKeydown);
  document.addEventListener('keydown', onDetailsCloseButtonEnterKeydown);

  renderDetails(photo);
  renderComments(photo.comments);
};

const initDetails = () => {
  detailsElement.addEventListener('click', onOverlayClick);
  detailsCloseButton.addEventListener('click', onCloseButtonClick);
};

export { initDetails, showDetails };

