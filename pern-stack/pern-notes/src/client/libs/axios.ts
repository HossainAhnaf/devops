import axios from 'axios';

const baseURL = import.meta.env.VITE_API_URL;

export const axiosAuth = axios.create({
  baseURL,
});

export const axiosPrivate = axios.create({
  baseURL,
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true,
});
