import { RERENDER_DELAY } from '../const/filter-const.js';

const isUnderMaxLength = (string, maxLength) => string.length <= maxLength;

const shuffleArray = (array) => [...array].sort(() => Math.random() - 0.5);

const normalizeSpaces = (string) => string.trim().replace(/\s+/g, ' ');

const getRandomElementsFromArray = (array, count) => {
  const shuffled = shuffleArray(array);
  return shuffled.slice(0, count);
};

const isBlank = (string) => /^\s*$/.test(string);

const debounce = (cb, delay = RERENDER_DELAY) => {
  let timeoutId;
  return (...callbackArguments) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => cb(...callbackArguments), delay);
  };
};

const memoize = (cb) => {
  let cached;
  return () => {
    if (!cached) {
      cached = cb();
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

