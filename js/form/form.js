import { sendData } from '../api/api.js';
import { SubmitButtonLabels } from '../const/form-const.js';
import { FILE_TYPES, WRONG_FILE_TYPE } from '../const/validation-const.js';
import { setBodyScrollLock, initPopup, showAlert } from '../utils/dom.js';
import { createEscapeKeydownHandler } from '../utils/listeners.js';
import { normalizeSpaces } from '../utils/utils.js';
import { initSlider, resetEffects } from './effect.js';
import { initScale, resetScale } from './scale.js';
import { showNotice } from './show-notice.js';
import { initValidation } from './validation.js';

const form = document.querySelector('.img-upload__form');
const imageUploadInput = form.querySelector('.img-upload__input');
const formPopup = form.querySelector('.img-upload__overlay');
const formCloseButton = form.querySelector('.img-upload__cancel');
const submitButton = form.querySelector('.img-upload__submit');
const overlay = form.querySelector('.img-upload__overlay');
const image = form.querySelector('.img-upload__preview img');
const effectsList = form.querySelector('.effects__list');

let pristine = null;

const getFormData = (formElement) => {
  const formSummary = new FormData(formElement);
  const hashtags = formSummary.get('hashtags');
  const normalizedHashtags = normalizeSpaces(hashtags);
  formSummary.set('hashtags', normalizedHashtags);
  return formSummary;
};

const blockSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = SubmitButtonLabels.SENDING;
};

const unblockSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = SubmitButtonLabels.IDLE;
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
  setBodyScrollLock(false);
  document.removeEventListener('keydown', onEscapeKeydown);
}

const showForm = () => {
  imageUploadInput.blur();
  formPopup.classList.remove('hidden');
  setBodyScrollLock(true);

  document.addEventListener('keydown', onEscapeKeydown);
};

const setImageUploadInputChangeHandler = () => {
  imageUploadInput.addEventListener('change', (evt) => {
    if (evt.target.value) {
      const file = imageUploadInput.files[0];
      const fileName = file.name.toLowerCase();

      const matches = FILE_TYPES.some((extension) => fileName.endsWith(extension));
      if (matches) {
        const url = URL.createObjectURL(file);
        image.src = url;

        const effectPreviews = effectsList.querySelectorAll('.effects__preview');
        effectPreviews.forEach((preview) => {
          preview.style.backgroundImage = `url('${url}')`;
        });

        showForm();
      } else {
        showAlert(WRONG_FILE_TYPE);
      }
    }
  });
};

const setFormSubmit = (onSuccess, onError) => {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const isValid = pristine?.validate();
    if (isValid) {
      blockSubmitButton();
      sendData(getFormData(form))
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

  setImageUploadInputChangeHandler();
  setFormSubmit(onFormSubmitSuccess, onFormSubmitError);
};

export { initForm };
