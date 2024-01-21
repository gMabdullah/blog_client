import axios from 'axios';

const instance = axios.create({
  // baseURL: 'http://localhost:8000/api',  // Set your default base URL here
  baseURL: "https://blog-apis-cyan.vercel.app/api",
  // withCredentials: true,
});

export default instance;
