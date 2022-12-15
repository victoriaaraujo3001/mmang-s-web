import { api } from "../services/api";

export async function AllFavoritesMangas() {
  try {
    const response = await api.get("/favorites");
    return response.data;
  } catch (error) {
    return {
      response: error.response,
      message: error.response.message,
      status: error.response.status,
    };
  }
}
