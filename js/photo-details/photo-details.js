import { setBodyScrollLock, initPopup, isEscapeKey } from '../utils/dom.js';
import { renderComments, resetComments } from './comments.js';
import { cacheUserComment, setUserComment } from './user-comment.js';

const detailsElement = document.querySelector('.big-picture');
const commentsShown = detailsElement.querySelector('.social__comment-shown-count');
const commentsTotal = detailsElement.querySelector('.social__comment-total-count');
const detailsCloseButton = detailsElement.querySelector('.big-picture__cancel');

const hideDetails = () => {
  document.removeEventListener('keydown', onEscapeKeydown);

  detailsElement.classList.add('hidden');
  setBodyScrollLock(false);
  resetComments();
  cacheUserComment();
};

function onEscapeKeydown(evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    const activeElement = document.activeElement;
    const isInputFocused = activeElement.tagName === 'INPUT' || activeElement.tagName === 'TEXTAREA';
    if (isInputFocused) {
      activeElement.blur();
      return;
    }
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
  setBodyScrollLock(true);

  document.addEventListener('keydown', onEscapeKeydown);

  renderDetails(photo);
  renderComments(photo.comments);
  setUserComment(photo);
};

const initDetails = () => {
  initPopup(detailsElement, detailsCloseButton, hideDetails);
};

export { initDetails, showDetails };

