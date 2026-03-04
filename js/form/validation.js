import { ValidationParameters, ValidationMessages } from '../const';
import { isBlank, isUnderMaxLength } from '../utils/utils';
const form = document.querySelector('.img-upload__form');

const hashtagInput = form.querySelector('.text__hashtags');
const commentInput = form.querySelector('.text__description');

const parseHashTags = (value) => {
  if (isBlank(value)) {
    return [];
  }
  const hashtags = value.trim().split(/\s+/).map((tag) => tag.toLowerCase());
  return hashtags;
};

const validateHashtagText = (value) => {
  const hashtags = parseHashTags(value);
  if (hashtags.length === 0) {
    return true;
  }
  const hashTagRegExp = new RegExp(`^#[a-zа-яё0-9]{1,${ValidationParameters.MAX_HASHTAG_LENGTH - 1}}$`, 'i');
  return hashtags.every((hashtag) => hashTagRegExp.test(hashtag));
};

const validateHashtagCount = (value) => {
  const hashtags = parseHashTags(value);
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

const initValidation = () => {
  const pristine = new Pristine(
    form,
    {
      classTo: 'img-upload__field-wrapper',
      errorClass: 'errors',
      errorTextParent: 'img-upload__field-wrapper',
      errorTextTag: 'div',
      errorTextClass: 'img-upload__field-wrapper--error'
    },
    true);

  pristine.addValidator(
    hashtagInput,
    validateHashtagText,
    ValidationMessages.HASH_TAG_TEXT,
    1,
    true
  );

  pristine.addValidator(
    hashtagInput,
    validateHashtagCount,
    ValidationMessages.HASH_TAG_COUNT,
    2,
    true
  );

  pristine.addValidator(
    hashtagInput,
    validateUniqueness,
    ValidationMessages.HASH_TAG_UNIQUENESS,
    3,
    true
  );

  pristine.addValidator(
    commentInput,
    validateComment,
    ValidationMessages.COMMENT
  );

  return pristine;
};

export { initValidation };
