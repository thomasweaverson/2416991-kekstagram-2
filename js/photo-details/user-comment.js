const commentInput = document.querySelector('.social__footer-text');

const userCommentValuesMap = new Map();

let currentPhoto = null;

const setUserComment = (photo) => {
  currentPhoto = photo;

  if (!userCommentValuesMap.has(photo)) {
    userCommentValuesMap.set(photo, '');
  }

  commentInput.value = userCommentValuesMap.get(photo);
};

const cacheUserComment = () => {
  if (!currentPhoto) {
    return;
  }

  const currentComment = commentInput.value;

  if (currentComment === '') {
    userCommentValuesMap.delete(currentPhoto);
    return;
  }

  userCommentValuesMap.set(currentPhoto, currentComment);
};

export { cacheUserComment, setUserComment };

