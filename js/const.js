const MOCK_PHOTOS_COUNT = 25;

const MAX_MOCK_COMMENTS_COUNT = 30;

const MIN_MOCK_LIKES_COUNT = 15;
const MAX_MOCK_LIKES_COUNT = 200;

const COMMENT_ID_START_FROM = 135;

const COMMENTS_STEP = 5;

const ValidationParameters = {
  MAX_HASHTAG_LENGTH: 20,
  MAX_HASHTAGS: 5,
  MAX_DESCRIPTION_LENGTH: 140
};

const ValidationMessages = {
  'HASH_TAG_TEXT': `Хэштег должен начинаться с #, содержать не более ${ValidationParameters.MAX_HASHTAG_LENGTH} букв или цифр`,
  'HASH_TAG_COUNT': `Максимум ${ValidationParameters.MAX_HASHTAGS} хэштегов`,
  'HASH_TAG_UNIQUENESS': 'Хэштеги не должны повторяться',
  'COMMENT': `Длина комментария не может превышать  ${ValidationParameters.MAX_DESCRIPTION_LENGTH} символов`,
};

const ScaleParameters = {
  MIN_SCALE: 25,
  MAX_SCALE: 100,
  STEP_SCALE: 25
};

export {
  COMMENT_ID_START_FROM,
  COMMENTS_STEP,
  MAX_MOCK_COMMENTS_COUNT,
  MAX_MOCK_LIKES_COUNT,
  MIN_MOCK_LIKES_COUNT,
  MOCK_PHOTOS_COUNT,
  ValidationMessages,
  ValidationParameters,
  ScaleParameters
};

