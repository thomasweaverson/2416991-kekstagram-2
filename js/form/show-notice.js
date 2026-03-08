import { blockBodyScroll, findTemplateById, isEscapeKey, unblockBodyScroll } from '../utils/dom';

const createNotice = (isSuccess) => {
  const template = findTemplateById(isSuccess ? 'success' : 'error');
  return template.cloneNode(true);
};

const hideNotice = () => {
  unblockBodyScroll();
  const noticeElement = document.querySelector('.success, .error');
  noticeElement.remove();
  document.removeEventListener('keydown', onEscapeKeydown);
};

function onEscapeKeydown(evt) {
  if (isEscapeKey(evt)) {
    hideNotice();
  }
}

const showNotice = (isSuccess) => {
  blockBodyScroll();
  const notice = createNotice(isSuccess);

  const button = notice.querySelector(`.${isSuccess ? 'success' : 'error'}__button`);

  button.addEventListener('click', () => {
    hideNotice();
  });

  notice.addEventListener('click', (evt) => {
    if (evt.target === notice) {
      hideNotice();
    }
  });

  document.addEventListener('keydown', onEscapeKeydown);

  document.body.appendChild(notice);
};

export { showNotice };
