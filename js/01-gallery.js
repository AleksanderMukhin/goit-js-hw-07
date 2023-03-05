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

function onGalleryContainerClick(evt) {
  console.log(evt.target.dataset.source);
//-Запрети это поведение по умолчанию чтобы браузер не открывал ссылку в новом окне
  evt.preventDefault();

  const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}" width="800" height="600">
`)

instance.show()
}



//------------modal window----------
// const refs = {
//   openModalBtn: document.querySelector('[data-action="open-modal"]'),
//   closeModalBtn: document.querySelector('[data-action="close-modal"]'),
//   backdrop: document.querySelector('.js-backdrop')
// }

// refs.openModalBtn.addEventListener('click', onOpenModal);
// refs.closeModalBtn.addEventListener('click', closeModal);
// refs.backdrop.addEventListener('click', closeModal)

// function onOpenModal() {
//   window.addEventListener('keydown', onEscKeyPress);
//   document.body.classList.add('show-modal');
// };

// function closeModal() {
//   window.removeEventListener('keydown', onEscKeyPress);
//   document.body.classList.remove('show-modal')
// };

// function onBackdropClick(event) {
//   if (event.currentTarget === event.target) {
//     closeModal();
//   }
// };

// function onEscKeyPress(event) {
//   if (event.code === 'Escape') {
//     closeModal();
// }
// }

// (function (x) {
//   delete x;
//   return x;
// })
//   (1)
// console.log(x)

// const singleBtn = document.querySelector("#single");

// const handleClick = () => {
//   console.log("click event listener callback");
// };

// singleBtn.addEventListener("click", handleClick);