export const BASE_URL = 'https://pixabay.com/api/';
export const API_KEY = '39780097-e878c33e38c89f96fdd6cb704';
export const options = {
  params: {
    key: API_KEY,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 40,
    page: 1,
    q: '',
  },
};