import { RERENDER_DELAY } from '../const/filter-const';

const isUnderMaxLength = (str, maxLength) => str.length <= maxLength;

const shuffleArray = (arr) => arr.sort(() => Math.random() - 0.5);

const normalizeSpaces = (str) => str.trim().replace(/\s+/g, ' ');

const getRandomElementsFromArray = (arr, count) => {
  const shuffled = shuffleArray(arr);
  return shuffled.slice(0, count);
};

const isBlank = (string) => /^\s*$/.test(string);

const debounce = (fn, delay = RERENDER_DELAY) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn(...args), delay);
  };
};

const memoize = (fn) => {
  let cached;
  return () => {
    if (!cached) {
      cached = fn();
    }
    return cached;
  };
};

export {
  debounce,
  getRandomElementsFromArray,
  isBlank,
  isUnderMaxLength,
  normalizeSpaces,
  memoize
};

