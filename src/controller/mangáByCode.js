import { api } from "../services/api";

export async function FindMangaByCod(cod) {
  try {
    const response = await api.get(`/manga/cod/${cod}`);
    console.log(response)
    return response;
  } catch (error) {
    return {
      response: error.response,
      message: error.response.message,
      status: error.response.status,
    };
  }
}
