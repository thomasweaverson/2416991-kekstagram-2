import { RERENDER_DELAY } from '../const';

const isUnderMaxLength = (str, maxLength) => str.length <= maxLength;

const createIdCounter = (start = 1) => {
  let counter = start;
  return () => counter++;
};

const getRandomIntegerFromInterval = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const getRandomElementFromArray = (arr) => arr[getRandomIntegerFromInterval(0, arr.length - 1)];

const shuffleArray = (arr) => arr.sort(() => Math.random() - 0.5);

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

export {
  createIdCounter,
  debounce,
  getRandomElementFromArray,
  getRandomElementsFromArray,
  getRandomIntegerFromInterval,
  isBlank,
  isUnderMaxLength
};

