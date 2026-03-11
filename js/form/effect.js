import { Effect, SliderOptions } from '../const/form-const.js';

const form = document.querySelector('.img-upload__form');
const sliderContainer = form.querySelector('.img-upload__effect-level');
const sliderElement = sliderContainer.querySelector('.effect-level__slider');
const effectButtonsList = form.querySelector('.effects__list');
const effectLevelInput = sliderContainer.querySelector('.effect-level__value');
const image = form.querySelector('.img-upload__preview img');

let currentEffect = Effect.NONE;

const getOptions = (effect) => SliderOptions[effect].options;

const applyEffect = (effect, value) => {
  image.style.filter = effect === Effect.NONE ? '' : `${SliderOptions[effect].filter}(${value}${SliderOptions[effect].unit})`;
};

const setSlider = () => {
  sliderContainer.style.display = 'none';

  noUiSlider.create(sliderElement, {
    ...getOptions(Effect.NONE),
    format: {
      to: (value) => Number.isInteger(value) ? value.toFixed(0) : value.toFixed(1),
      from: (value) => parseFloat(value),
    },
  });
};

const setSliderUpdateHandler = () => {
  sliderElement.noUiSlider.on('update', () => {
    const value = sliderElement.noUiSlider.get();
    applyEffect(currentEffect, value);
    effectLevelInput.value = currentEffect === Effect.NONE ? '' : value;
  });
};

const isNoneEffect = () => currentEffect === Effect.NONE;

const resetEffects = () => {
  currentEffect = 'none';
  effectLevelInput.value = '';
  image.style.filter = '';
  sliderContainer.style.display = 'none';
};

const enableSlider = () => {
  sliderContainer.style.display = 'block';
  const options = getOptions(currentEffect);
  sliderElement.noUiSlider.updateOptions(options);
  sliderElement.noUiSlider.set(options.start);
};

const onEffectChange = (evt) => {
  if (!evt.target.matches('input[type="radio"]')) {
    return;
  }

  currentEffect = evt.target.value;

  if (isNoneEffect()) {
    resetEffects();
  } else {
    enableSlider();
  }

  evt.target.blur();
};

const setEffectChangeHandler = () => {
  effectButtonsList.addEventListener('change', onEffectChange);
};

const initSlider = () => {
  setSlider();
  setSliderUpdateHandler();
  setEffectChangeHandler();
};

export { initSlider, resetEffects };
