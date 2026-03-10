import { Effects, SliderOptions } from '../const/form-const.js';

const form = document.querySelector('.img-upload__form');
const sliderContainer = form.querySelector('.img-upload__effect-level');
const sliderElement = sliderContainer.querySelector('.effect-level__slider');
const effectButtonsList = form.querySelector('.effects__list');
const effectLevelInput = sliderContainer.querySelector('.effect-level__value');
const image = form.querySelector('.img-upload__preview img');

let currentEffect = Effects.NONE;

const getOptions = (effect) => SliderOptions[effect].options;

const setImageStyleByEffect = (effect, value) => {
  image.style.filter = effect === Effects.NONE ? '' : `${SliderOptions[effect].filter}(${value}${SliderOptions[effect].unit})`;
};

const initSlider = () => {
  sliderContainer.style.display = 'none';

  noUiSlider.create(sliderElement, {
    ...getOptions(Effects.NONE),
    format: {
      to: (value) => Number.isInteger(value) ? value.toFixed(0) : value.toFixed(1),
      from: (value) => parseFloat(value),
    },
  });

  sliderElement.noUiSlider.on('update', () => {
    const value = sliderElement.noUiSlider.get();
    setImageStyleByEffect(currentEffect, value);
    effectLevelInput.value = currentEffect === Effects.NONE ? '' : value;
  });

  effectButtonsList.addEventListener('change', (evt) => {
    if (evt.target.matches('input[type="radio"]')) {
      currentEffect = evt.target.value;
      if (currentEffect === Effects.NONE) {
        sliderContainer.style.display = 'none';
        image.style.filter = '';
        effectLevelInput.value = '';
      } else {
        sliderContainer.style.display = 'block';
        const options = getOptions(currentEffect);
        sliderElement.noUiSlider.updateOptions(options);
        sliderElement.noUiSlider.set(options.start);
      }
    }
  });
};

const resetEffects = () => {
  currentEffect = 'none';
  image.style.filter = '';
  sliderContainer.style.display = 'none';
};

export { initSlider, resetEffects };
