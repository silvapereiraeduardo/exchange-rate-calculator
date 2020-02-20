import axios from "axios";

const api = axios.create({
  baseURL: "https://api.exchangerate-api.com/v4/latest"
});

export default api;
