import { isEnterKey, isEscapeKey, renderPack } from './utils/dom';

const detailsElement = document.querySelector('.big-picture');
const commentsShown = document.querySelector('.social__comment-shown-count');
const commentsTotal = document.querySelector('.social__comment-total-count');
const detailsCloseButton = detailsElement.querySelector('.big-picture__cancel');
const commentsList = detailsElement.querySelector('.social__comments');

const createShowMoreCommentsButton = () => {
  const showMoreButton = document.createElement('button');
  showMoreButton.type = 'button';
  showMoreButton.classList.add('social__comments-loader', 'comments-loader');
  showMoreButton.textContent = 'Загрузить еще';
  return showMoreButton;
};

const initShowMoreButton = () => {
  let showMoreCommentsButton = detailsElement.querySelector('.social__comments-loader');

  if (showMoreCommentsButton) {
    showMoreCommentsButton.remove();
  }

  showMoreCommentsButton = createShowMoreCommentsButton();

  commentsList.after(showMoreCommentsButton);

  return showMoreCommentsButton;
};

const hideDetails = () => {
  detailsElement.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onEscapeKeydown);
  document.removeEventListener('keydown', onEnterKeydown);
};

function onCloseButtonClick() {
  hideDetails();
}

function onOverlayClick(evt) {
  if (evt.target === detailsElement) {
    hideDetails();
  }
}

function onEnterKeydown(evt) {
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

const createCommentsControl = (comments) => {
  let shownCommentsCount = 0;
  const restComments = comments.slice();

  const showNextComments = (showMoreButton) => {
    const nextComments = restComments.splice(0, 5);
    renderPack(nextComments, createComment, commentsList);
    shownCommentsCount += nextComments.length;
    commentsShown.textContent = shownCommentsCount;

    if (restComments.length === 0) {
      showMoreButton.classList.add('hidden');
    }
  };

  return showNextComments;
};

const renderComments = (comments) => {
  const showMoreCommentsButton = initShowMoreButton();
  commentsList.innerHTML = '';
  const showCommentsBatch = createCommentsControl(comments);

  showCommentsBatch(showMoreCommentsButton);

  showMoreCommentsButton.addEventListener('click', () => showCommentsBatch(showMoreCommentsButton));
};

const showDetails = (photo) => {
  detailsElement.classList.remove('hidden');
  document.body.classList.add('modal-open');

  document.addEventListener('keydown', onEscapeKeydown);
  document.addEventListener('keydown', onEnterKeydown);

  renderDetails(photo);
  renderComments(photo.comments);
};

const initDetails = () => {
  detailsElement.addEventListener('click', onOverlayClick);
  detailsCloseButton.addEventListener('click', onCloseButtonClick);
};

export { initDetails, showDetails };

