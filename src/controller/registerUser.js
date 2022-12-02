import { api } from "../services/api";

export async function RegisterUser(login, email, password) {
  try {
    console.log(login, email, password);

    const response = await api.post("/user/register", {
      login: login,
      email: email,
      password: password,
    });
    return response.data;
  } catch (error) {
    console.log(error.response.data)
    return error.message;
  }
}
