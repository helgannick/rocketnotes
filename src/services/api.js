import axios from "axios";

export const api = axios.create({
  baseURL: "https://rocketnotes-api-zq6b.onrender.com",
});
