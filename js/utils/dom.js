import { NOTICE_SHOW_TIME } from '../const/api-const';
import { createHidingClickHandler, createOverlayClickHandler } from './listeners';

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

const blockBodyScroll = () => {
  document.body.classList.add('modal-open');
};

const unblockBodyScroll = () => {
  document.body.classList.remove('modal-open');
};

const initPopup = (overlay, closeButton, hideCB) => {
  const onOverlayClick = createOverlayClickHandler(overlay, hideCB);
  const onCloseButtonClick = createHidingClickHandler(hideCB);

  overlay.addEventListener('click', onOverlayClick);
  closeButton.addEventListener('click', onCloseButtonClick);
};

const showAlert = (text = null) => {
  const template = findTemplateById('data-error');
  const notice = template.cloneNode(true);
  const title = notice.querySelector('.data-error__title');

  if (text) {
    title.textContent = text;
  }
  document.body.appendChild(notice);
  setTimeout(() => {
    notice.remove();
  }, NOTICE_SHOW_TIME);
};

export { blockBodyScroll, findTemplateById, initPopup, isEscapeKey, renderPack, showAlert, unblockBodyScroll };

