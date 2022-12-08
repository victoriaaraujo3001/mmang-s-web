import { api } from "../services/api";

export async function GetAllRequests() {
  try {
    const response = await api.get("/promotions");
    return response;
  } catch (error) {
    console.log(error.response);
    return {
      response: error.response,
      message: error.message,
    };
  }
}
