import { Effects, SliderOptions } from '../const.js';

const form = document.querySelector('.img-upload__form');
const sliderContainer = form.querySelector('.img-upload__effect-level');
const sliderElement = sliderContainer.querySelector('.effect-level__slider');
const effectButtonsList = form.querySelector('.effects__list');
const effectLevelInput = sliderContainer.querySelector('.effect-level__value');
const image = form.querySelector('.img-upload__preview img');

let currentEffect = Effects.NONE;

const getOptions = (effect) => SliderOptions[effect].options;

const setImageStyleByEffect = (effect, value) => {
  if (effect === 'none') {
    image.style.filter = '';
  } else {
    image.style.filter = `${SliderOptions[effect].filter}(${value}${SliderOptions[effect].unit})`;
  }
};

const initSlider = () => {
  sliderContainer.style.display = 'none';

  noUiSlider.create(sliderElement, getOptions('none'));

  sliderElement.noUiSlider.on('update', () => {
    const value = sliderElement.noUiSlider.get();
    setImageStyleByEffect(currentEffect, value);
    effectLevelInput.value = +value;
  });

  effectButtonsList.addEventListener('change', (evt) => {
    if (evt.target.matches('input[type="radio"]')) {
      currentEffect = evt.target.value;
      if (currentEffect === 'none') {
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
