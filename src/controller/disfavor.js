import { api } from "../services/api";

export async function DisfavorMangaByCod(cod) {
  try {
    const response = await api.get(`/disfavor/${cod}`);
    console.log(
      "🚀 ~ file: disfavor.js:7 ~ DisfavorMangaByCod ~ response",
      response
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
