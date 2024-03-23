import axios from 'axios';
export const BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const UrlService = axios.create({
  baseURL : BASE_URL
});