import { ValidationMessages } from '../const';
import {
  isHashTagStartsWithHash,
  isHashtagNotEmpty,
  isNeedSpace,
  validateComment,
  validateHashtagCount,
  validateHashtagLength,
  validateHashtagSymbols,
  validateUniqueness
} from './validators';

const form = document.querySelector('.img-upload__form');
const hashtagInput = form.querySelector('.text__hashtags');
const commentInput = form.querySelector('.text__description');

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
    validateUniqueness,
    ValidationMessages.HASH_TAG_UNIQUENESS,
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
    validateHashtagLength,
    ValidationMessages.HASH_TAG_LENGTH,
    3,
    true
  );

  pristine.addValidator(
    hashtagInput,
    validateHashtagSymbols,
    ValidationMessages.HASH_TAG_SYMBOLS,
    4,
    true
  );

  pristine.addValidator(
    hashtagInput,
    isNeedSpace,
    ValidationMessages.HASH_TAG_NO_SPACE,
    5,
    true
  );

  pristine.addValidator(
    hashtagInput,
    isHashtagNotEmpty,
    ValidationMessages.HASH_TAG_EMPTY,
    6,
    true
  );

  pristine.addValidator(
    hashtagInput,
    isHashTagStartsWithHash,
    ValidationMessages.HASH_TAG_NO_HASH,
    7,
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
