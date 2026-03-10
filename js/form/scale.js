import { ScaleParameters } from '../const/form-const.js';

const increaseScaleButton = document.querySelector('.scale__control--bigger');
const decreaseScaleButton = document.querySelector('.scale__control--smaller');
const scaleInput = document.querySelector('.scale__control--value');
const image = document.querySelector('.img-upload__preview img');

const setScaleInputValue = (scale) => {
  scaleInput.value = `${scale}%`;
};

const getScaleInputValue = () => parseInt(scaleInput.value, 10);

const initScale = () => {
  setScaleInputValue(ScaleParameters.MAX_SCALE);
  const scaleValue = getScaleInputValue() / 100;

  image.style.transform = `scale(${scaleValue})`;

  increaseScaleButton.addEventListener('click', () => {
    const currentScale = getScaleInputValue();
    if (currentScale < ScaleParameters.MAX_SCALE) {
      setScaleInputValue(currentScale + ScaleParameters.STEP_SCALE);
      image.style.transform = `scale(${getScaleInputValue() / 100})`;
    }
  });

  decreaseScaleButton.addEventListener('click', () => {
    const currentScale = getScaleInputValue();
    if (currentScale > ScaleParameters.MIN_SCALE) {
      setScaleInputValue(currentScale - ScaleParameters.STEP_SCALE);
      image.style.transform = `scale(${getScaleInputValue() / 100})`;
    }
  });
};

const resetScale = () => {
  setScaleInputValue(ScaleParameters.MAX_SCALE);
  image.style.transform = `scale(${ScaleParameters.MAX_SCALE / 100})`;
};

export { initScale, resetScale };

