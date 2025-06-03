import axios from "axios";

const api = axios.create({
  baseURL: "http://vukibo.onrender.com",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
