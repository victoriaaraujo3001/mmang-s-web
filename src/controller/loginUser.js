import { api } from "../services/api";
import { logar } from "../services/auth";

export async function LoginUser(login, password) {
  try {
    const response = await api.post("/user/auth", {
      login: login,
      password: password,
    });
    console.log(response.data) 
    logar(response.data.user.id, response.data.token) 
    return response;
    // return response.data;
  } catch (error) {
    return {
      response: error.response,
      message: error.response.message,
      status: error.response.status,
    };
  }
}
