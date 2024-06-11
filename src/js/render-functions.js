function imageTemplate(image) {
  return `<li class="list-item">
        <img
          src="${image.userImageURL}"
          alt="${image.tags}"
          width="360"
          
        />
        <ul class="description-list">
          <li class="description-item">
            <p>Likes</p>
            <p>${image.likes}</p>
          </li>
          <li class="description-item">
            <p>Views</p>
            <p>${image.views}</p>
          </li>
          <li class="description-item">
            <p>Comments</p>
            <p>${image.comments}</p>
          </li>
          <li class="description-item">
            <p>Downloads</p>
            <p>${image.downloads}</p>
          </li>
        </ul>
      </li>`;
}

export function imagesTemplate(arr) {
  return arr.map(imageTemplate).join('');
}
