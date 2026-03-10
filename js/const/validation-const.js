const ValidationParameters = {
  MAX_HASHTAG_LENGTH: 20,
  MAX_HASHTAGS: 5,
  MAX_DESCRIPTION_LENGTH: 140
};

const ValidationMessages = {
  HASH_TAG_NO_HASH: 'Хэштег должен начинаться с #',
  HASH_TAG_SYMBOLS: 'Хэштег должен состоять из букв и/или цифр',
  HASH_TAG_EMPTY: 'Хэштег не может состоять только из решётки',
  HASH_TAG_NO_SPACE: 'Хэштеги следует разделять пробелом',
  HASH_TAG_LENGTH: `Хэштег должен содержать не более ${ValidationParameters.MAX_HASHTAG_LENGTH} знаков`,
  HASH_TAG_COUNT: `Максимум ${ValidationParameters.MAX_HASHTAGS} хэштегов`,
  HASH_TAG_UNIQUENESS: 'Хэштеги не должны повторяться',
  COMMENT: `Длина комментария не может превышать  ${ValidationParameters.MAX_DESCRIPTION_LENGTH} символов`,
};

const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

const WRONG_FILE_TYPE = `Допустимые форматы: ${FILE_TYPES.join(', ')}`;

export { FILE_TYPES, ValidationMessages, ValidationParameters, WRONG_FILE_TYPE };

