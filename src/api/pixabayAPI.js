import axios from 'axios';

const apiKey = '38645785-6e0112a930fc9fb3ed87273a1';
axios.defaults.baseURL = 'https://pixabay.com/api/';

export const getImagesBySearch = async (search, page) => {
  const params = {
    key: apiKey,
    page: page,
    per_page: 12,
    image_type: photo,
    orientation: horizontal,
  };
  const response = await axios(`?q=${search}`, params);
  return response;
};
