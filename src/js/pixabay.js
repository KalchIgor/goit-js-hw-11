import axios from "axios";

const API_KEY = "34077503-5bfdb6066ba2aa1107947cc02";

axios.defaults.baseURL = 'https://pixabay.com/api/';

export async function fetchArticles(query, page, perPage) {
  const response = await axios.get(
    `?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`,
  );
  return response
}