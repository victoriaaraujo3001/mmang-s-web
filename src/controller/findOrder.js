import { api } from "../services/api";

export async function FindoOrder(id) {
  try {
    const response = await api.get(`/findOrder/${id}`);
    return response;
  } catch (error) {
    return {
      response: error.response,
      message: error.response.message,
      status: error.response.status,
    };
  }
}
