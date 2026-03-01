import { renderGallery } from './gallery';
import { generateMockPhotos } from './mock-photos';
import { detailsInit } from './photo-details';

detailsInit();
renderGallery(generateMockPhotos());
