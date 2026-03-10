import { ACTIVE_FILTER_CLASS, Filters, RANDOM_PHOTOS_COUNT } from '../const/filter-const.js';
import { getPhotos, renderPhotos } from '../gallery/gallery';
import { debounce, getRandomElementsFromArray } from '../utils/utils';

const filterBlock = document.querySelector('.img-filters');

const getRandomPhotos = () => {
  const photos = getPhotos();
  const randomPhotos = getRandomElementsFromArray(photos, RANDOM_PHOTOS_COUNT);
  return randomPhotos;
};

const getSortedByCommentsPhotos = (() => {
  let sorted = null;
  return () => {
    if (sorted) {
      return sorted;
    }
    sorted = getPhotos().sort((a, b) => b.comments.length - a.comments.length);
    return sorted;
  };
})();

const getPhotosByFilter = (filterId) => {
  switch (filterId) {
    case Filters.DEFAULT:
      return getPhotos();
    case Filters.RANDOM:
      return getRandomPhotos();
    case Filters.DISCUSSED:
      return getSortedByCommentsPhotos();
    default:
      return getPhotos();
  }
};

const renderFilteredPhotos = (filterId) => {
  renderPhotos(getPhotosByFilter(filterId));
};

const debouncedRenderFilteredPhotos = debounce(renderFilteredPhotos);

const initFilter = () => {
  filterBlock.classList.remove('img-filters--inactive');

  filterBlock.addEventListener('click', (evt) => {
    const target = evt.target.closest('.img-filters__button');
    if (target.classList.contains(ACTIVE_FILTER_CLASS)) {
      return;
    }

    const prevActiveButton = filterBlock.querySelector(`.${ACTIVE_FILTER_CLASS}`);
    prevActiveButton.classList.remove(ACTIVE_FILTER_CLASS);
    target.classList.add(ACTIVE_FILTER_CLASS);

    const currentFilter = target.id;
    debouncedRenderFilteredPhotos(currentFilter);
  });
};

export { initFilter };

