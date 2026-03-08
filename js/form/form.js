import { sendData } from '../api/api';
import { SubmitButtonText } from '../const';
import { blockBodyScroll, initPopup, unblockBodyScroll } from '../utils/dom';
import { createEscapeKeydownHandler } from '../utils/listeners';
import { initSlider, resetEffects } from './effect';
import { initScale, resetScale } from './scale';
import { showNotice } from './show-notice';
import { initValidation } from './validation';

const form = document.querySelector('.img-upload__form');
const imageUploadInput = form.querySelector('.img-upload__input');
const formPopup = form.querySelector('.img-upload__overlay');
const formCloseButton = form.querySelector('.img-upload__cancel');
const submitButton = form.querySelector('.img-upload__submit');
const overlay = form.querySelector('.img-upload__overlay');

let pristine = null;

const blockSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = SubmitButtonText.SENDING;
};

const unblockSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = SubmitButtonText.IDLE;
};

const resetForm = () => {
  form.reset();
  imageUploadInput.value = '';
  pristine?.reset();

  resetScale();
  resetEffects();
};

const onFormSubmitSuccess = () => {
  const isSuccess = true;
  resetForm();
  hideForm();
  showNotice(isSuccess);
};

const onFormSubmitError = () => {
  const isSuccess = false;
  showNotice(isSuccess);
};

const onEscapeKeydown = createEscapeKeydownHandler(hideForm);

function hideForm() {
  resetForm();
  formPopup.classList.add('hidden');
  unblockBodyScroll();
  document.removeEventListener('keydown', onEscapeKeydown);
}

const showForm = () => {
  formPopup.classList.remove('hidden');
  blockBodyScroll();

  document.addEventListener('keydown', onEscapeKeydown);
};

const setFormSubmit = (onSuccess, onError) => {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const isValid = pristine?.validate();
    if (isValid) {
      blockSubmitButton();
      sendData(new FormData(evt.target))
        .then(onSuccess)
        .catch(onError)
        .finally(unblockSubmitButton);
    }
  });
};

const initForm = () => {
  pristine = initValidation();
  initPopup(overlay, formCloseButton, hideForm);
  initScale();
  initSlider();

  imageUploadInput.addEventListener('change', (evt) => {
    if (evt.target.value) {
      showForm();
    }
  });

  setFormSubmit(onFormSubmitSuccess, onFormSubmitError);

};

export { initForm };
