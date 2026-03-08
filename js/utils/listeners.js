import { isEscapeKey } from './dom';

const createHidingClickHandler = (hideCallback) => (evt) => {
  if (evt.target === evt.currentTarget) {
    hideCallback();
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

const createEscapeKeydownHandler = (hideCallback) => (evt) => {
  if (isEscapeKey(evt) && !isDocumentHasShownAlert()) {
    evt.preventDefault();
    const activeElement = document.activeElement;
    const isInputFocused = activeElement.tagName === 'INPUT' || activeElement.tagName === 'TEXTAREA';
    if (isInputFocused) {
      activeElement.blur();
      return;
    }
    hideCallback();
  }
};


export { createEscapeKeydownHandler, createHidingClickHandler, createOverlayClickHandler };

