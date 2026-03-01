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

export { findTemplateById, renderPack };
