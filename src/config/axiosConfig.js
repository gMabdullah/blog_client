import axios from 'axios';

const instance = axios.create({
  // baseURL: 'http://localhost:8000',  // Set your default base URL here
  baseURL: "https://blog-apis-cyan.vercel.app/",
  withCredentials: true,
});

export default instance;
