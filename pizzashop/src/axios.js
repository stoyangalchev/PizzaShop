// src/api.js
import axios from "axios";

const instance = axios.create({
  baseURL: "https://pizzashop-218v.onrender.com/api", // Set your base URL here
});

export default instance;
