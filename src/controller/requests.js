import { api } from "../services/api";

export async function AllRequests() {
  try {
    const response = await api.get("/requests");
    return response.data;
  } catch (error) {
    return {
      response: error.response,
      message: error.response.message,
      status: error.response.status,
    };
  }
}
