import { api } from "../services/api";

export async function PromotionsMangas() {
  try {
    const response = await api.post("/promotions")
    return response;
  } catch (error) {
    console.log(error.response)
    return error.response;
  }
}
