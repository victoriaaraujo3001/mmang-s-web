import { api } from "../services/api";

export async function PromotionsMangas() {
  try {
    const response = await api.get("/promotions");
    return response.data;
  } catch (error) {
    return {
      response: error.response,
      message: error.response.message,
      status: error.response.status,
    };
  }
}
