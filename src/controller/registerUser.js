import { api } from "../services/api";

export async function RegisterUser(login, email, password, nomeCompleto,telofone) {
  try {
    const response = await api.post("/user/register", {
      login: login,
      email: email,
      password: password,
      nome: nomeCompleto,
      tel: telofone
    });
    return response;
  } catch (error) {
    return {
      response: error.response,
      message: error.response.message,
      status: error.response.status,
    };
  }
}
