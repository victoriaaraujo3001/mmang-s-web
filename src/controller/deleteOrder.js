import { api } from "../services/api";

export async function DeleteOrderById(id) {
  try {
    const response = await api.get(`/deleteOrder/${id}`);
    return response;
  } catch (error) {
    return {
      response: error.response,
      message: error.response.message,
      status: error.response.status,
    };
  }
}
