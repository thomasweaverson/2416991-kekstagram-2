import { COMMENT_ID_START_FROM, MAX_MOCK_COMMENTS_COUNT, MAX_MOCK_LIKES_COUNT, MIN_MOCK_LIKES_COUNT, MOCK_PHOTOS_COUNT } from './const.js';
import { getMockData } from './mock-data.js';
import { createIdCounter, getRandomElementFromArray, getRandomIntegerFromInterval } from './utils.js';

const getPhotoId = createIdCounter();
const getCommentId = createIdCounter(COMMENT_ID_START_FROM);

const { DESCRIPTIONS: mockDescriptions, NAMES: mockNames, COMMENTS: mockComments } = getMockData();

const getMockMessage = () => {
  const comments = [...mockComments];
  const firstComment = comments.splice(getRandomIntegerFromInterval(0, comments.length - 1), 1)[0];
  const isSecondCommentNeed = !!(getRandomIntegerFromInterval(0, 1));
  const secondComment = isSecondCommentNeed ? comments[getRandomIntegerFromInterval(0, comments.length - 1)] : '';
  return `${firstComment}${isSecondCommentNeed ? ` ${secondComment}` : ''}`;
};

const createMockComment = () => ({
  id: getCommentId(),
  avatar: `img/avatar-${getRandomIntegerFromInterval(1, 6)}.svg`,
  message: getMockMessage(),
  name: getRandomElementFromArray(mockNames),
});

const createMockPhoto = () => {
  const id = getPhotoId();
  return {
    id,
    url: `photos/${id}.jpg`,
    description: getRandomElementFromArray(mockDescriptions),
    likes: getRandomIntegerFromInterval(MIN_MOCK_LIKES_COUNT, MAX_MOCK_LIKES_COUNT),
    comments: Array.from({ length: getRandomIntegerFromInterval(0, MAX_MOCK_COMMENTS_COUNT) }, createMockComment),
  };
};

const generateMockPhotos = () => Array.from({ length: MOCK_PHOTOS_COUNT }, createMockPhoto);

export { generateMockPhotos };

