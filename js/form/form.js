import { initPopup } from '../utils/dom';
import { createEscapeKeydownHandler, createPopupCloseButtonEnterKeydownHandler } from '../utils/listeners';
import { initValidation } from './validation';

const form = document.querySelector('.img-upload__form');

const imageUploadInput = form.querySelector('.img-upload__input');

const formPopup = form.querySelector('.img-upload__overlay');
const formCloseButton = form.querySelector('.img-upload__cancel');
const overlay = form.querySelector('.img-upload__overlay');

let pristine = null;

const resetForm = () => {
  form.reset();
  imageUploadInput.value = '';
  pristine?.reset();
};

const onFormCloseButtonEnterKeydown = createPopupCloseButtonEnterKeydownHandler(hideForm, formCloseButton);
const onEscapeKeydown = createEscapeKeydownHandler(hideForm);

function hideForm() {
  formPopup.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onEscapeKeydown);
  document.removeEventListener('keydown', onFormCloseButtonEnterKeydown);
  resetForm();
}

const showForm = () => {
  formPopup.classList.remove('hidden');
  document.body.classList.add('modal-open');

  document.addEventListener('keydown', onEscapeKeydown);
  document.addEventListener('keydown', onFormCloseButtonEnterKeydown);
};

const initForm = () => {
  pristine = initValidation();

  initPopup(overlay, formCloseButton, hideForm);

  imageUploadInput.addEventListener('change', (evt) => {
    if (evt.target.value) {
      showForm();
    }
  });


  form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const isValid = pristine?.validate();

    if (pristine && isValid) {
      // eslint-disable-next-line
      console.log('Форма валидна, можно отправлять');
      form.submit();
      // отправка данных на сервер будем потом когда-нибудь

    } else {
      // eslint-disable-next-line
      console.log('Форма содержит ошибки');
    }
  });

};

export { initForm };
