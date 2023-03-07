import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');
const cardsMarkup = createImageCardsMarkup(galleryItems);

gallery.insertAdjacentHTML('beforeend', cardsMarkup);

function createImageCardsMarkup(galleryItems) {
  return galleryItems.map(({ preview, original, description }) => {
    return `
  <li><a class="gallery__item" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a></li>`;
  }).join("");
};
  
  const lightbox = new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: 'alt',
    captionDelay: 250,
  });

