import { createHidingClickHandler } from './listeners';

const findTemplateById = (id) => {
  const template = document.querySelector(`#${id}`);
  if (!template) {
    throw new Error(`Template with id "${id}" not found`);
  }

  if (!(template instanceof HTMLTemplateElement)) {
    throw new Error(`Element with id "${id}" is not a template`);
  }

  return template.content.firstElementChild;
};

const renderPack = (items, makeElement, container) => {
  const fragment = document.createDocumentFragment();
  items.forEach((item) => {
    const element = makeElement(item);
    fragment.appendChild(element);
  });
  container.appendChild(fragment);
};

const isEscapeKey = (evt) => evt.key === 'Escape';

const isEnterKey = (evt) => evt.key === 'Enter';

const initPopup = (overlay, closeButton, hideCB) => {
  const onOverlayClick = createHidingClickHandler(overlay, hideCB);
  const onCloseButtonClick = createHidingClickHandler(closeButton, hideCB);

  overlay.addEventListener('click', onOverlayClick);
  closeButton.addEventListener('click', onCloseButtonClick);

};

export { findTemplateById, isEnterKey, isEscapeKey, renderPack, initPopup };

