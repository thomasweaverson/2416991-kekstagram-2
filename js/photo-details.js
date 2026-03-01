import { isEscapeKey, renderPack } from './utils/dom';

const detailsElement = document.querySelector('.big-picture');
const commentsShowMoreButton = detailsElement.querySelector('.comments-loader');
const commentsCounter = detailsElement.querySelector('.social__comment-count');
const detailsCloseButton = detailsElement.querySelector('.big-picture__cancel');
const commentsList = detailsElement.querySelector('.social__comments');

const hideDetails = () => {
  commentsList.innerHTML = '';
  detailsElement.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onEscKeydown);
};

const onCancelButtonClick = () => {
  hideDetails();
};

function onEscKeydown(evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    hideDetails();
  }
}

const renderDetails = ({ url, description, likes }) => {
  detailsElement.querySelector('.big-picture__img img').src = url;
  detailsElement.querySelector('.big-picture__img img').alt = description;
  detailsElement.querySelector('.social__caption').textContent = description;
  detailsElement.querySelector('.likes-count').textContent = likes;
};

const createComment = ({ avatar, name, message }) => {
  const commentElement = document.createElement('li');
  commentElement.classList.add('social__comment');

  const commentAvatar = document.createElement('img');
  commentAvatar.classList.add('social__picture');
  commentAvatar.src = avatar;
  commentAvatar.alt = name;
  commentAvatar.width = 35;
  commentAvatar.height = 35;

  const commentText = document.createElement('p');
  commentText.classList.add('social__text');
  commentText.textContent = message;

  commentElement.appendChild(commentAvatar);
  commentElement.appendChild(commentText);

  return commentElement;
};

const renderComments = (comments) => {
  commentsList.innerHTML = '';
  renderPack(comments, createComment, commentsList);
};

const showDetails = (photo) => {
  detailsElement.classList.remove('hidden');
  document.body.classList.add('modal-open');

  //! temporary
  commentsShowMoreButton.classList.add('hidden');
  commentsCounter.classList.add('hidden');

  document.addEventListener('keydown', onEscKeydown);

  renderDetails(photo);

  if (photo.comments.length > 0) {
    renderComments(photo.comments);
  }
};

const detailsInit = () => {
  detailsCloseButton.addEventListener('click', onCancelButtonClick);
};

export { detailsInit, showDetails };

