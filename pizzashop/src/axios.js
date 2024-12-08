// src/api.js
import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3000/api", // Set your base URL here
});

export default instance;
