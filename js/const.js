const NOTICE_SHOW_TIME = 5000;

const BASE_URL = 'https://31.javascript.htmlacademy.pro/kekstagram';

const Route = {
  GET_DATA: '/data',
  SEND_DATA: '/',
};
const Method = {
  GET: 'GET',
  POST: 'POST',
};
const ErrorText = {
  GET_DATA: 'Не удалось загрузить данные. Попробуйте обновить страницу',
  SEND_DATA: 'Не удалось отправить форму. Попробуйте ещё раз',
};

const SubmitButtonText = {
  IDLE: 'Опубликовать',
  SENDING: 'Публикуется...',
};

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

const RANDOM_PHOTOS_COUNT = 10;

const ACTIVE_FILTER_CLASS = 'img-filters__button--active';

const Filters = {
  DEFAULT: 'filter-default',
  RANDOM: 'filter-random',
  DISCUSSED: 'filter-discussed',
};

const RERENDER_DELAY = 500;

export {
  ACTIVE_FILTER_CLASS,
  BASE_URL,
  COMMENTS_STEP,
  Effects,
  ErrorText,
  Filters,
  Method,
  NOTICE_SHOW_TIME,
  RANDOM_PHOTOS_COUNT,
  RERENDER_DELAY,
  Route,
  ScaleParameters,
  SliderOptions,
  SubmitButtonText,
  ValidationMessages,
  ValidationParameters
};

