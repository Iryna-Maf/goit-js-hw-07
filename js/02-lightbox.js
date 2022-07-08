import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryContainer = document.querySelector('.gallery');

const galleryItemsMarkup = creatGalleryItemsMarkup(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', galleryItemsMarkup);

function creatGalleryItemsMarkup(images) {
  return images
    .map(({ preview, original, description } = {}) => {
      return `
   <a class="gallery__item" href="${original}">
   <img
   class="gallery__image"
   src="${preview}"
   data-source="${original}"
   alt="${description}"/>
   </a>`;
    })
    .join('');
}
new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
