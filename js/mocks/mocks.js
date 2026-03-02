import { generateMockPhotos } from './generate-mock-photo';

class MockPhotoService {
  constructor() {
    this.photos = null;
  }

  getPhotos() {
    if (!this.photos) {
      this.photos = generateMockPhotos();
    }
    return this.photos;
  }
}

export const mocks = new MockPhotoService();

