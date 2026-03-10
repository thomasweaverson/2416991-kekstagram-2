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

const SubmitButtonText = {
  IDLE: 'Опубликовать',
  SENDING: 'Публикуется...',
};

export { Effects, ScaleParameters, SliderOptions, SubmitButtonText };

