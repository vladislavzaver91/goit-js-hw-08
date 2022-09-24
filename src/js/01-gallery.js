import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');
const itemsMarkup = createGalleryItemsMarkup(galleryItems);

galleryContainer.addEventListener('click',() => {});
galleryContainer.insertAdjacentHTML('beforeend', itemsMarkup);

function createGalleryItemsMarkup(galleryItems) {
    return galleryItems.map(({preview, original, description}) => {
        return `<div class="gallery__item">
        <a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
        </div>`;
    }).join('');
};

    var lightbox = new SimpleLightbox('.gallery a', {captionDelay : 250, captionsData: 'alt'});
console.log(galleryItems);