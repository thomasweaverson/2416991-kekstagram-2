const commentInput = document.querySelector('.social__footer-text');

const userCommentValuesMap = new Map();

const findCurrentPhoto = (map) => {
  for (const [photo, value] of map) {
    if (value.isCurrent) {
      return photo;
    }
  }
  return null;
};

const setUserComment = (photo) => {
  const isPhotoInCache = userCommentValuesMap.has(photo);

  if (!isPhotoInCache) {
    userCommentValuesMap.set(photo, { comment: '', isCurrent: true });
  } else {
    userCommentValuesMap.set(photo, { comment: userCommentValuesMap.get(photo).comment, isCurrent: true });
  }

  const currentCommentValue = userCommentValuesMap.get(photo).comment;
  commentInput.value = currentCommentValue;
};

const cacheUserComment = () => {
  const currentComment = commentInput.value;
  if (currentComment === '') {
    return;
  }

  const currentPhoto = findCurrentPhoto(userCommentValuesMap);
  if (currentPhoto) {
    userCommentValuesMap.set(currentPhoto, { comment: currentComment, isCurrent: false });
  }
};

export { setUserComment, cacheUserComment };
