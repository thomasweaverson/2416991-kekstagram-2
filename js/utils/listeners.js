import { isEnterKey, isEscapeKey } from './dom';

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

const createEscapeKeydownHandler = (hideCallback) => (evt) => {
  if (isEscapeKey(evt)) {
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

const createPopupCloseButtonEnterKeydownHandler = (hideCallback, popupCloseButton) =>
  (evt) => {
    if (isEnterKey(evt) && evt.target === popupCloseButton) {
      evt.preventDefault();
      hideCallback();
    }
  };

export { createEscapeKeydownHandler, createHidingClickHandler, createPopupCloseButtonEnterKeydownHandler, createOverlayClickHandler };

