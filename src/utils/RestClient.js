import Axios from 'axios';

export const searchTweets = (q, max_id) => Axios
    .get(`/api/v1/search-tweets?q=${q}${ max_id ? `&max_id=${max_id}` : ''}`)
    .then(response => response.data);
