import { galleryItems } from './gallery-items.js';
// Change code below this line

const allGallery = document.querySelector(".gallery");

const createImgCardsMarkup = (galleryItems) => { 
       return galleryItems.map(({preview, original, description}) => `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`).join("");
};


const imgMarkup = createImgCardsMarkup(galleryItems);
allGallery.insertAdjacentHTML('beforeend', imgMarkup);


allGallery.addEventListener('click', (event) => {
   event.preventDefault();
   if (event.target.nodeName === 'IMG') {
       const originalImgURL = event.target.getAttribute('data-source');
     const instance = basicLightbox.create(`<img src="${originalImgURL}" width="1280">`,
       {
           onShow: () => {
               window.addEventListener('keydown', onCloseLightbox);
           },
           onClose: () => {
               window.removeEventListener('keydown', onCloseLightbox);}
       });
       const onCloseLightbox = (event) => {
           if (event.key === 'Escape') {
               instance.close();
           }
       };
       instance.show();
   }
});