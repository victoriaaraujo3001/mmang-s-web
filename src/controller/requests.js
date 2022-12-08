import { api } from "../services/api";

export async function AddRequests(id_manga, preco_manga) {
  try {
    const response = await api.post("/requests/register", {
      id_manga,
      preco_manga,
    });
    return response;
  } catch (error) {
    console.log({
      response: error.response,
      message: error.message,
    });
    return {
      response: error.response,
      message: error.message,
    };
  }
}
