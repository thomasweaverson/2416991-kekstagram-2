import { ValidationParameters } from '../const/validation-const.js';
import { isBlank, isUnderMaxLength } from '../utils/utils.js';

const parseHashTags = (value) => {
  if (isBlank(value)) {
    return [];
  }
  const hashtags = value.trim().split(/\s+/).map((tag) => tag.toLowerCase());
  return hashtags;
};

const createValidatorByRegExp = (regExp) => (value) => {
  const hashtags = parseHashTags(value);
  if (hashtags.length === 0) {
    return true;
  }
  return hashtags.every((hashtag) => regExp.test(hashtag));
};

const isHashTagStartsWithHash = createValidatorByRegExp(/^#/);

const isHashtagNotEmpty = createValidatorByRegExp(/^#\S+$/);

const isNeedSpace = createValidatorByRegExp(/^#[a-zа-яё0-9]+(?!.*#)/i);

const validateHashtagSymbols = createValidatorByRegExp(/^#[a-zа-яё0-9]+$/i);

const validateHashtagLength = createValidatorByRegExp(/^#.{1,19}$/);

const validateHashtagCount = (value) => {
  const hashtags = parseHashTags(value);
  if (hashtags.length === 0) {
    return true;
  }
  return hashtags.length <= ValidationParameters.MAX_HASHTAGS;
};

const validateUniqueness = (value) => {
  const hashtags = parseHashTags(value);
  if (hashtags.length === 0) {
    return true;
  }
  const uniqueTags = new Set(hashtags);
  return uniqueTags.size === hashtags.length;
};

const validateComment = (value) => isUnderMaxLength(value, ValidationParameters.MAX_DESCRIPTION_LENGTH);

export {
  isHashtagNotEmpty,
  isHashTagStartsWithHash,
  isNeedSpace,
  validateComment,
  validateHashtagCount,
  validateHashtagLength,
  validateHashtagSymbols,
  validateUniqueness
};

