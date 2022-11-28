import { api } from "../services/api";

export async function AllCategories() {
  try {
    const response = await api.get("/generos");
    return response.data;
  } catch (error) {
    return error.message;
  }
}