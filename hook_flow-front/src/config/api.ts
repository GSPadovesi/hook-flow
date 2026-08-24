import axios from "axios";

export const api = axios.create({
  baseURL: 'http://localhost:8080/hookflow-api',
  withCredentials: true,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  withXSRFToken: true
});
