import { renderGallery } from './gallery';
import { generateMockPhotos } from './mock-photos';

const photos = generateMockPhotos();
renderGallery(photos);
