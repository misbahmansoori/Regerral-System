import axios from "axios";

const api = axios.create({
  baseURL: "https://regerral-system.onrender.com/api",
});

export default api;
