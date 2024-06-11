import getFetch from './js/pixabay-api';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { imgListElem } from './js/pixabay-api';

const formElem = document.querySelector('.search-form');
const btnElem = document.querySelector('.search-btn');
const loadingElem = document.querySelector('.loader');

formElem.addEventListener('submit', e => {
  e.preventDefault();
  imgListElem.innerHTML = '';
  loadingElem.classList.remove('visually-hidden');

  const searchText = formElem.elements.searchText.value.trim();
  if (searchText === '') {
    loadingElem.classList.add('visually-hidden');
    return;
  }
  getFetch(searchText);

  formElem.reset();
});
