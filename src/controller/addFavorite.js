import { api } from "../services/api";

export async function RegisterFavorite(id_manga) {
  try {
    const response = await api.get(`/addFavorite/${id_manga}`);
    return response;
  } catch (error) {
    return {
      response: error.response,
      message: error.response.message,
      status: error.response.status,
    };
  }
}
