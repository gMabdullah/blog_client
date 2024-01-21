import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:8000',  // Set your default base URL here
});

export default instance;
