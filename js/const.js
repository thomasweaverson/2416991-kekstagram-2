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
  HASH_TAG_NO_HASH: 'Хэштег должен начинаться с #',
  HASH_TAG_SYMBOLS: 'Хэштег должен состоять из букв и/или цифр',
  HASH_TAG_EMPTY: 'Хэштег не может состоять только из решётки',
  HASH_TAG_NO_SPACE: 'Хэштеги следует разделять пробелом',
  HASH_TAG_LENGTH: `Хэштег должен содержать не более ${ValidationParameters.MAX_HASHTAG_LENGTH} знаков`,
  HASH_TAG_COUNT: `Максимум ${ValidationParameters.MAX_HASHTAGS} хэштегов`,
  HASH_TAG_UNIQUENESS: 'Хэштеги не должны повторяться',
  COMMENT: `Длина комментария не может превышать  ${ValidationParameters.MAX_DESCRIPTION_LENGTH} символов`,
};

const ScaleParameters = {
  MIN_SCALE: 25,
  MAX_SCALE: 100,
  STEP_SCALE: 25
};

const Effects = {
  NONE: 'none',
  CHROME: 'chrome',
  SEPIA: 'sepia',
  MARVIN: 'marvin',
  PHOBOS: 'phobos',
  HEAT: 'heat'
};

const SliderOptions = {
  [Effects.NONE]: {
    options: {
      range: {
        min: 1,
        max: 1,
      },
      start: 1,
      step: 1,
      connect: 'lower',
    },
    unit: '',
    filter: null,
  },
  [Effects.CHROME]: {
    options: {
      range: {
        min: 0,
        max: 1,
      },
      start: 1,
      step: 0.1,
      connect: 'lower',
    },
    unit: '',
    filter: 'grayscale',
  },
  [Effects.SEPIA]: {
    options: {
      range: {
        min: 0,
        max: 1,
      },
      start: 1,
      step: 0.1,
      connect: 'lower',
    },
    unit: '',
    filter: 'sepia',
  },
  [Effects.MARVIN]: {
    options: {
      range: {
        min: 0,
        max: 100,
      },
      start: 100,
      step: 1,
      connect: 'lower',
    },
    unit: '%',
    filter: 'invert',
  },
  [Effects.PHOBOS]: {
    options: {
      range: {
        min: 0,
        max: 3,
      },
      start: 3,
      step: 0.1,
      connect: 'lower',
    },
    unit: 'px',
    filter: 'blur',
  },
  [Effects.HEAT]: {
    options: {
      range: {
        min: 1,
        max: 3,
      },
      start: 3,
      step: 0.1,
      connect: 'lower',
    },
    unit: '',
    filter: 'brightness',
  }
};

export {
  COMMENT_ID_START_FROM,
  COMMENTS_STEP, Effects, MAX_MOCK_COMMENTS_COUNT,
  MAX_MOCK_LIKES_COUNT,
  MIN_MOCK_LIKES_COUNT,
  MOCK_PHOTOS_COUNT, ScaleParameters, SliderOptions, ValidationMessages,
  ValidationParameters
};

