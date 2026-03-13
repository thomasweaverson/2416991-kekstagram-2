import { isEscapeKey } from './dom.js';

const createHidingClickHandler = (hidingCallback) => (evt) => {
  if (evt.target === evt.currentTarget) {
    hidingCallback();
  }
};

const createOverlayClickHandler = (element, hideCallback) => {
  let startedInside = false;

  element.addEventListener('pointerdown', (evt) => {
    startedInside = evt.target === element;
  });

  element.addEventListener('pointerup', (evt) => {
    if (startedInside && evt.target === element) {
      hideCallback();
    }
    startedInside = false;
  });
};

const isDocumentHasShownAlert = () => {
  const successAlert = document.querySelector('.success');
  const errorAlert = document.querySelector('.error');
  return !!(successAlert || errorAlert);
};

const createEscapeKeydownHandler = (hidingCallback) => (evt) => {
  if (isEscapeKey(evt) && !isDocumentHasShownAlert()) {
    evt.preventDefault();
    const activeElement = document.activeElement;
    const isInputFocused = activeElement.tagName === 'INPUT' || activeElement.tagName === 'TEXTAREA';
    if (isInputFocused) {
      activeElement.blur();
      return;
    }
    hidingCallback();
  }
};


export { createEscapeKeydownHandler, createHidingClickHandler, createOverlayClickHandler };

