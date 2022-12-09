import { api } from "../services/api";

export async function RegisterUser(login, email, password) {
  try {
    console.log(login, email, password);

    const response = await api.post("/user/register", {
      login: login,
      email: email,
      password: password,
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
