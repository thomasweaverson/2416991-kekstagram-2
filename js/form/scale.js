import { ScaleParameters } from '../const/form-const.js';

const previewContainer = document.querySelector('.img-upload__preview-container');
const scaleControl = previewContainer.querySelector('.img-upload__scale');
const increaseScaleButton = scaleControl.querySelector('.scale__control--bigger');
const decreaseScaleButton = scaleControl.querySelector('.scale__control--smaller');
const scaleInput = scaleControl.querySelector('.scale__control--value');
const image = previewContainer.querySelector('.img-upload__preview img');

const setScaleInputValue = (scale) => {
  scaleInput.value = `${scale}%`;
};

const getScaleInputValue = () => parseInt(scaleInput.value, 10);

const createScaleHandler = (operation) => () => {
  const currentScale = getScaleInputValue();
  const { MAX, MIN, STEP } = ScaleParameters;

  const operations = {
    increase: () => Math.min(currentScale + STEP, MAX),
    decrease: () => Math.max(currentScale - STEP, MIN)
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
  setScaleInputValue(ScaleParameters.MAX);
  const scaleValue = getScaleInputValue() / 100;

  image.style.transform = `scale(${scaleValue})`;

  setIncreaseScaleButtonClickHandler();
  setDecreaseScaleButtonClickHandler();
};

const resetScale = () => {
  setScaleInputValue(ScaleParameters.MAX);
  image.style.transform = `scale(${ScaleParameters.MAX / 100})`;
};

export { initScale, resetScale };

