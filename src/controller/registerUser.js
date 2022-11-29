import { api } from "../services/api";

export async function RegisterUser() {
  try {
    const response = await api.post("/user/register");
    return response.data;
  } catch (error) {
    return error.message;
  }
}