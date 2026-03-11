import { ScaleParameters } from '../const/form-const.js';

const increaseScaleButton = document.querySelector('.scale__control--bigger');
const decreaseScaleButton = document.querySelector('.scale__control--smaller');
const scaleInput = document.querySelector('.scale__control--value');
const image = document.querySelector('.img-upload__preview img');

const setScaleInputValue = (scale) => {
  scaleInput.value = `${scale}%`;
};

const getScaleInputValue = () => parseInt(scaleInput.value, 10);

const createScaleHandler = (operation) => () => {
  const currentScale = getScaleInputValue();
  const { MAX_SCALE, MIN_SCALE, STEP } = ScaleParameters;

  const operations = {
    increase: () => Math.min(currentScale + STEP, MAX_SCALE),
    decrease: () => Math.max(currentScale - STEP, MIN_SCALE)
  };

  const newScale = operations[operation]();

  if (newScale !== currentScale) {
    setScaleInputValue(newScale);
    image.style.transform = `scale(${newScale / 100})`;
  }
};


const onIncreaseScaleButtonClick = createScaleHandler('increase');
const onDecreaseScaleButtonClick = createScaleHandler('decrease');

const setIncreaseScaleButtonClickHandler = () => {
  increaseScaleButton.addEventListener('click', onIncreaseScaleButtonClick);
};

const setDecreaseScaleButtonClickHandler = () => {
  decreaseScaleButton.addEventListener('click', onDecreaseScaleButtonClick);
};


const initScale = () => {
  setScaleInputValue(ScaleParameters.MAX_SCALE);
  const scaleValue = getScaleInputValue() / 100;

  image.style.transform = `scale(${scaleValue})`;

  setIncreaseScaleButtonClickHandler();
  setDecreaseScaleButtonClickHandler();
};

const resetScale = () => {
  setScaleInputValue(ScaleParameters.MAX_SCALE);
  image.style.transform = `scale(${ScaleParameters.MAX_SCALE / 100})`;
};

export { initScale, resetScale };

