import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import icon from '../img/bi_x-octagon.png';
import { imagesTemplate } from './render-functions';

const iziToastOptions = {
  iconUrl: icon,
  backgroundColor: '#ef4040',
  position: 'topRight',
  message:
    'Sorry, there are no images matching your search query. Please, try again!',
};

const imgListElem = document.querySelector('.img-list');
const loadingElem = document.querySelector('.loading');

export default function getFetch(typePhoto) {
  const url = `https://pixabay.com/api/?key=44327397-ede54b0a70b202831c7c411c5&q=${typePhoto}&image_type=photo
  &orientation=horizontal&safesearch=true`;

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.show(iziToastOptions);
        loadingElem.classList.add('visually-hidden');
        return;
      }

      imgListElem.innerHTML = imagesTemplate(data.hits);
      loadingElem.classList.add('visually-hidden');
      console.log(data.hits);
    })
    .catch(err => {
      throw new Error(err);
    });
}
