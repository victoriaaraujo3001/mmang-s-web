import { api } from "../services/api";

export async function AllMangas() {
  try {
    const response = await api.get("/mangas");
    return response.data;
  } catch (error) {
    return {
      response: error.response,
      message: error.response.message,
      status: error.response.status,
    };
  }
}
