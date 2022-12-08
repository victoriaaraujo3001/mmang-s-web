import { api } from "../services/api";

export async function FindMangaByCod(cod) {
  try {
    const response = await api.get(`/manga/${cod}`);
    return response;
  } catch (error) {
    console.log(error.response);
    return {
      response: error.response,
      message: error.message,
    };
  }
}
