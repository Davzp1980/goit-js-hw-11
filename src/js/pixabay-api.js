export default function getFetch(typePhoto) {
  fetch(
    `https://pixabay.com/api/?key=44327397-ede54b0a70b202831c7c411c5&q=${typePhoto}`
  )
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(data => console.log(data));
}
