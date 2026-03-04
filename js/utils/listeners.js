import { isEnterKey, isEscapeKey } from './dom';

const createHidingClickHandler = (element, hideCallback) => (evt) => {
  if (evt.target === element) {
    hideCallback();
  }
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

export { createEscapeKeydownHandler, createHidingClickHandler, createPopupCloseButtonEnterKeydownHandler };

