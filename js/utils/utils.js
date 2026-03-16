import { RERENDER_DELAY } from '../const/filter-const.js';

const isUnderMaxLength = (text, maxLength) => text.length <= maxLength;

const shuffleArray = (elements) => [...elements].sort(() => Math.random() - 0.5);

const normalizeSpaces = (text) => text.trim().replace(/\s+/g, ' ');

const getRandomElementsFromArray = (elements, count) => {
  const shuffled = shuffleArray(elements);
  return shuffled.slice(0, count);
};

const isBlank = (text) => /^\s*$/.test(text);

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

