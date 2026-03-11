import { initForm } from './form/form.js';
import { initGallery } from './gallery/gallery.js';
import { initDetails } from './photo-details/photo-details.js';

const app = {
  init() {
    initDetails();
    initGallery();
    initForm();
  }
};

app.init();
