import { api } from "../services/api";

export async function PromotionsMangas() {
  try {
    const response = await api.get("/promotions");
    return response.data;
  } catch (error) {
    console.log(error.response)
    return error.response;
  }
}
