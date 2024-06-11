import getFetch from './js/pixabay-api';

const formElem = document.querySelector('.search-form');
const btnElem = document.querySelector('.search-btn');

formElem.addEventListener('submit', e => {
  e.preventDefault();

  const searchText = formElem.elements.searchText.value.trim();
  if (searchText === '') {
    return;
  }
  getFetch(searchText);

  formElem.reset();
});
