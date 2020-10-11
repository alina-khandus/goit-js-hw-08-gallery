import galleryItems from "./gallery-items.js";

const galleryContainer = document.querySelector(".js-gallery");

galleryContainer.insertAdjacentHTML("beforeend", createGalleryMarkup(galleryItems));

galleryContainer.addEventListener("click", openModal);

function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ original, preview, description }) => {
      return `
      <li class="gallery__item">
        <a
          class="gallery__link"
          href="${original}"
        >
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </li>
        `;
    })
    .join('');
}

const modalButton = document.querySelector(".lightbox__button");
modalButton.addEventListener("click", closeModal);


const modalOpen = document.querySelector(".js-lightbox");
const modalImage = document.querySelector(".lightbox__image");


function openModal(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== "IMG") {
    return;
  }
  document.addEventListener("keydown", closeModal);

  modalOpen.classList.add("is-open");
  modalImage.src = evt.target.dataset.source;
  modalImage.alt = evt.target.alt;
}

function closeModal(evt) {
  evt.preventDefault();
  document.removeEventListener("keydown", closeModal);
  modalOpen.classList.remove("is-open");
  modalImage.src = "";
}

