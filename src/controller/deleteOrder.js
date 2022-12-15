import { api } from "../services/api";

export async function DeleteOrderById(id) {
  try {
    const response = await api.get(`/deleteOrder/${id}`);
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
