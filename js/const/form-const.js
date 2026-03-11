const ScaleParameters = {
  MIN: 25,
  MAX: 100,
  STEP: 25
};

const Effect = {
  NONE: 'none',
  CHROME: 'chrome',
  SEPIA: 'sepia',
  MARVIN: 'marvin',
  PHOBOS: 'phobos',
  HEAT: 'heat'
};

const SliderOptions = {
  [Effect.NONE]: {
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
  [Effect.CHROME]: {
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
  [Effect.SEPIA]: {
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
  [Effect.MARVIN]: {
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
  [Effect.PHOBOS]: {
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
  [Effect.HEAT]: {
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

const SubmitButtonLabels = {
  IDLE: 'Опубликовать',
  SENDING: 'Публикуется...',
};

export { Effect, ScaleParameters, SliderOptions, SubmitButtonLabels };

