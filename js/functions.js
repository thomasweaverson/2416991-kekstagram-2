const isUnderMaxLength = (str, maxLength) => str.length <= maxLength;

const isPalindrome = (str) => {
  const modifiedStr = str.replaceAll(/\s/g, '').toLowerCase();
  const reversedStr = modifiedStr.split('').reverse().join('');
  return modifiedStr === reversedStr;
};

const parsePositiveInteger = (str) => {
  const parsed = str.toString().replaceAll(/\D/g, '');
  return parsed.length === 0 ? NaN : Number(parsed);
};

export { isPalindrome, isUnderMaxLength, parsePositiveInteger };
