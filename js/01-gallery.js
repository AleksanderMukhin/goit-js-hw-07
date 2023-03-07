import { galleryItems } from './gallery-items.js';

// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');
const cardsMarkup = createImageCardsMarkup(galleryItems);

gallery.insertAdjacentHTML('beforeend', cardsMarkup);
gallery.addEventListener('click', onGalleryContainerClick);

function createImageCardsMarkup(galleryItems) {
  return galleryItems.map(({ preview, original, description }) => {
    return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
  }).join("");
};

function onGalleryContainerClick(event) {
  console.log(event.target.dataset.source);
  //-Запрети это поведение по умолчанию чтобы браузер не открывал ссылку в новом окне
  event.preventDefault();
  
  if (event.target.nodeName !== "IMG") {
    return;
  }
  
  const instance = basicLightbox.create(`<img src="${event.target.dataset.source}" width="800" height="600">`, {
    onShow: (instance) => {
      window.addEventListener("keydown", onEscKeyPress);
      
      function onEscKeyPress(event) {
        if (event.code === "Escape") {
          instance.close();
        }
      }
    },
    onClose: (instance) =>
      window.removeEventListener("keydown", onEscKeyPress),
  });

  instance.show();
}
