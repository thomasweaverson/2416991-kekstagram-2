const MOCK_PHOTOS_COUNT = 25;

const MAX_MOCK_COMMENTS_COUNT = 30;

const MIN_MOCK_LIKES_COUNT = 15;
const MAX_MOCK_LIKES_COUNT = 200;

const COMMENT_ID_START_FROM = 135;

const COMMENTS_STEP = 5;

const MAX_DESCRIPTION_LENGTH = 140;
const MAX_HASHTAGS = 5;
const MAX_HASHTAG_LENGTH = 20;

const ValidationMessages = {
  'HASH_TAG_TEXT': `Хэштег должен начинаться с #, содержать не более ${MAX_HASHTAG_LENGTH} букв или цифр`,
  'HASH_TAG_COUNT': `Максимум ${MAX_HASHTAGS} хэштегов`,
  'HASH_TAG_UNIQUENESS': 'Хэштеги не должны повторяться',
  'COMMENT': `Длина комментария не может превышать  ${MAX_DESCRIPTION_LENGTH} символов`,
};

export {
  COMMENT_ID_START_FROM,
  COMMENTS_STEP,
  MAX_DESCRIPTION_LENGTH, MAX_HASHTAG_LENGTH, MAX_HASHTAGS,
  MAX_MOCK_COMMENTS_COUNT,
  MAX_MOCK_LIKES_COUNT,
  MIN_MOCK_LIKES_COUNT,
  MOCK_PHOTOS_COUNT, ValidationMessages
};

