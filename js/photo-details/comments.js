import { COMMENTS_STEP } from '../const';
import { renderPack } from '../utils/dom';

const commentsList = document.querySelector('.social__comments');
const commentsShown = document.querySelector('.social__comment-shown-count');
const showMoreButton = document.querySelector('.social__comments-loader');

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

let onShowMoreCommentsClick = () => { };

const createCommentsControl = (comments) => {
  let shownCommentsCount = 0;
  const restComments = comments.slice();

  const showNextComments = () => {
    const nextComments = restComments.splice(0, COMMENTS_STEP);
    renderPack(nextComments, createComment, commentsList);
    shownCommentsCount += nextComments.length;
    commentsShown.textContent = shownCommentsCount;

    if (restComments.length === 0) {
      showMoreButton.classList.add('hidden');
    }
  };

  return showNextComments;
};

const resetComments = () => {
  commentsList.innerHTML = '';

  commentsShown.textContent = 0;
  showMoreButton.classList.remove('hidden');

  showMoreButton.removeEventListener('click', onShowMoreCommentsClick);
  onShowMoreCommentsClick = () => { };
};

const renderComments = (comments) => {
  commentsList.innerHTML = '';

  const showCommentsBatch = createCommentsControl(comments);

  showCommentsBatch();

  onShowMoreCommentsClick = showCommentsBatch;

  showMoreButton.addEventListener('click', onShowMoreCommentsClick);
};

export { renderComments, resetComments };
