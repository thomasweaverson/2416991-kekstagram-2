import { RERENDER_DELAY } from '../const/filter-const.js';

const isUnderMaxLength = (text, maxLength) => text.length <= maxLength;

const shuffleArray = (elements) => {
  const result = [...elements];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
};

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

