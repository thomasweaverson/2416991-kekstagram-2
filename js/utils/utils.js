const isUnderMaxLength = (str, maxLength) => str.length <= maxLength;

const createIdCounter = (start = 1) => {
  let counter = start;
  return () => counter++;
};

const getRandomIntegerFromInterval = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const getRandomElementFromArray = (arr) => arr[getRandomIntegerFromInterval(0, arr.length - 1)];

const isBlank = (string) => /^\s*$/.test(string);

export { createIdCounter, getRandomElementFromArray, getRandomIntegerFromInterval, isBlank, isUnderMaxLength };

