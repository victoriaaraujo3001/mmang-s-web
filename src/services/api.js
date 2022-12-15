import axios from "axios"
import { pegarToken } from "./auth";

const api = axios.create({
    baseURL: 'http://192.168.10.153:3333'
})

api.interceptors.request.use(async (config) => {
    const token =  await pegarToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  
    return config;
  });

export { api }