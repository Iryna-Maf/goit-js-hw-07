import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');

const galleryItemsMarkup = creatGalleryItemsMarkup(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', galleryItemsMarkup);

function creatGalleryItemsMarkup(images) {
  return images
    .map(({ preview, original, description } = {}) => {
      return `<div class="gallery__item>
   <a class="gallery__link" href="${original}">
   <img
   class="gallery__image"
   src="${preview}"
   data-source="${original}"
   alt="${description}"/>
   </a>
   </div>`;
    })
    .join('');
}

const onImageClick = event => {
  event.preventDefault();

  if (event.target.nodeName !== 'IMG') {
    return;
  }
  const sourceOfImg = event.target.dataset.source;
  const instance = basicLightbox.create(`
    <img src="${sourceOfImg}" width="800" height="600"/>
`);
  instance.show();

  window.addEventListener('keydown', onEscape);
  function onEscape(event) {
    console.log(event);
    if (event.code !== 'Escape') {
      return;
    }
    instance.close();
    window.removeEventListener('keydown', onEscape);
  }
};

galleryContainer.addEventListener('click', onImageClick);
