import { galleryItems } from './gallery-items.js';
// Change code below this line
const allGallery = document.querySelector(".gallery");

const createImgCardsMarkup = (galleryItems) => { 
       return galleryItems.map(({preview, original, description}) => `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>
</li>`).join("");
};

const imgMarkup = createImgCardsMarkup(galleryItems);
allGallery.insertAdjacentHTML('beforeend', imgMarkup);

new SimpleLightbox('.gallery a', {captionsData: 'alt', captionDelay: 250});





console.log(galleryItems);
