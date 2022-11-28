import { api } from "../services/api";

export async function CategoryById(id) {
  try {
    const response = await api.get(`/filterMangas/${id}`);
    return response.data;
  } catch (error) {
    return error.message;
  }
}