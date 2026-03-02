import { renderGallery } from './gallery';
import { generateMockPhotos } from './mock-photos';
import { initDetails } from './photo-details';

initDetails();
renderGallery(generateMockPhotos());
