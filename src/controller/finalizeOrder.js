import { api } from "../services/api";

export async function FinalizeOrderById(id) {
  try {
    const response = await api.get(`/finalizeOrder/${id}`);
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
