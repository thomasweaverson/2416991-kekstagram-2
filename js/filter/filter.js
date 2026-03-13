import { ACTIVE_FILTER_CLASS, Filters, RANDOM_PHOTOS_COUNT } from '../const/filter-const.js';
import { getPhotos, renderPhotos } from '../gallery/gallery.js';
import { debounce, getRandomElementsFromArray, memoize } from '../utils/utils.js';

const filterElement = document.querySelector('.img-filters');

const getRandomPhotos = () => {
  const photos = getPhotos();
  const randomPhotos = getRandomElementsFromArray(photos, RANDOM_PHOTOS_COUNT);
  return randomPhotos;
};

const getSortedByCommentsPhotos = memoize(() => getPhotos().sort((a, b) => b.comments.length - a.comments.length));

const getPhotosByFilter = (filter) => {
  switch (filter) {
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

const renderFilteredPhotos = (filter) => {
  renderPhotos(getPhotosByFilter(filter));
};

const renderFilteredPhotosWithDebounce = debounce(renderFilteredPhotos);

const initFilter = () => {
  filterElement.classList.remove('img-filters--inactive');

  filterElement.addEventListener('click', (evt) => {
    if (!evt.target.classList.contains('img-filters__button')) {
      return;
    }

    const target = evt.target.closest('.img-filters__button');
    if (target.classList.contains(ACTIVE_FILTER_CLASS)) {
      return;
    }

    const prevActiveButton = filterElement.querySelector(`.${ACTIVE_FILTER_CLASS}`);
    prevActiveButton.classList.remove(ACTIVE_FILTER_CLASS);
    target.classList.add(ACTIVE_FILTER_CLASS);

    const currentFilter = target.id;
    renderFilteredPhotosWithDebounce(currentFilter);
  });
};

export { initFilter };

