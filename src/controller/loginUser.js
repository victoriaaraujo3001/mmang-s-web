import { api } from "../services/api";
import { loginUser } from "../services/auth";

export async function LoginUser(login, password) {
  try {
    const response = await api.post("/user/auth", {
      login: login,
      password: password,
    });
    loginUser(response.data.user.id, response.data.token) 
    return response;
  } catch (error) {
    return {
      response: error.response,
      message: error.response.message,
      status: error.response.status,
    };
  }
}
