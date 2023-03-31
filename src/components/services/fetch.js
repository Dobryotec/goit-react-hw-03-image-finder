const API_KEY = '33694347-6ae8de5621b95f7febdf77706';
const BASE_URL = 'https://pixabay.com/api/';

export function fetchImages(searchText, page) {
  return fetch(
    `${BASE_URL}?key=${API_KEY}&q=${searchText}&page=${page}&image_type=photo&orientation=horizontal&per_page=12`
  ).then(res => res.json());
}
