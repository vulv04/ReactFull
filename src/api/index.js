import axios from "axios";

const api = axios.create({
  baseURL: "https://vukibo.onrender.com",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
