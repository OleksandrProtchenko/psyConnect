import axios from 'axios';

export const nextServer = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export const backendServer = axios.create({
  baseURL: process.env.API_URL,
});
