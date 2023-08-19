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
       const instance = basicLightbox.create(`
           <img src="${originalImgURL}" width="1280">
       `);
    instance.show();
     window.addEventListener('keydown', closeModal);
    function closeModal(event) {
      if (event.key === 'Escape') {
        instance.close();
     window.removeEventListener('keydown', closeModal);
  };
};
  };
});



 







// const insertListItems = (string) => { 
//     allGallery.insertAdjacentHTML('beforeend', string);
// };

// insertListItems(renderList(galleryItems));


// document.querySelector('.gallery').onclick = (event) => {
//   event.preventDefault();
//   const image = galleryItems.map(({original}) => `${original}`);
//   basicLightbox.create(`
// 		<img width="1400" height="900" src="${image}">
// 	`).show()
// };




// allGallery.addEventListener('click', (event) => {
//   if (event.target.nodeName === 'IMG') {
//     event.preventDefault();
//   }
// });













// allGallery.addEventListener('click', openImg);


// const openImg = () => {
//   return basicLightbox.create(`
// 		<img width="1400" height="900" src="${galleryItems.original}">
// 	`).show();
// };









// const instance = basicLightbox.create(`
//     <li class="gallery__item">
//   <a class="gallery__link" href="large-image.jpg">
//     <img
//       class="gallery__image"
//       src="small-image.jpg"
//       data-source="large-image.jpg"
//       alt="Image description"
//     />
//   </a>
// </li>
// `)

// instance.show()





// console.log(galleryItems);
