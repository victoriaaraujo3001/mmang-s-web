import { api } from "../services/api";

export async function RegisterFavorite(id_manga, actionFavorite) {
  try {
    const response = await api.get(
      `/addFavorite/${id_manga}/${actionFavorite}`
    );
    return response;
  } catch (error) {
    return {
      response: error.response,
      message: error.response.message,
      status: error.response.status,
    };
  }
}
