import getFetch from './js/pixabay-api';

import simpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const formElem = document.querySelector('.search-form');
const btnElem = document.querySelector('.search-btn');
const loadingElem = document.querySelector('.loading');

formElem.addEventListener('submit', e => {
  e.preventDefault();

  loadingElem.classList.remove('visually-hidden');

  const searchText = formElem.elements.searchText.value.trim();
  if (searchText === '') {
    return;
  }
  getFetch(searchText);

  formElem.reset();
});
