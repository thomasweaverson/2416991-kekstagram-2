const MOCK_PHOTOS_COUNT = 25;

const MAX_MOCK_COMMENTS_COUNT = 30;

const MIN_MOCK_LIKES_COUNT = 15;
const MAX_MOCK_LIKES_COUNT = 200;

const COMMENT_ID_START_FROM = 135;

const getMockData = () => ({
  DESCRIPTIONS: [
    'Закат над горным озером, отражающий розовые облака.',
    'Уютный кот, свернувшийся клубочком на мягком пледе.',
    'Старый деревянный мост в тумане ранним утром.',
    'Чашка кофе и свежая выпечка на столике в кафе.',
    'Портрет улыбающейся девушки с венком из полевых цветов.',
    'Городская суета, застывшая в длинной ночной выдержке.',
    'Пальмы и бирюзовый океан на райском тропическом пляже.',
    'Осенний парк, усыпанный золотыми листьями клена.',
    'Маленький ребенок, запускающий воздушного змея в поле.',
    'Тарелка с пастой и бокалом красного вина при свечах.'
  ],
  NAMES: [
    'Гендальф',
    'Доктор Кто',
    'Шрэк',
    'Дарт Вейдер',
    'Гарри Поттер',
    'Чебурашка',
    'Джек Воробей',
    'Харли Квинн',
    'Мастер Йода',
    'Шерлок Холмс',
    'Железный Человек',
    'Бэтмен',
    'Карлсон',
    'Нео',
    'Терминатор'
  ],
  COMMENTS: [
    'Всё отлично!',
    'В целом всё неплохо. Но не всё.',
    'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
    'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
    'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
    'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
  ],
});

const createIdCounter = (start = 1) => {
  let counter = start;
  return () => counter++;
};

const getRandomIntegerFromInterval = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const getRandomElementFromArray = (arr) => arr[getRandomIntegerFromInterval(0, arr.length - 1)];
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

