import axios from "axios";

const baseURL = import.meta.env.VITE_API_URL ?? 'http://localhost:8080/hookflow-api'

export const api = axios.create({
  baseURL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  }
});
