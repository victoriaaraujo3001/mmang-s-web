import { api } from "../services/api";

export async function LoginUser(login, password) {
  try {
    console.log(login, password);

    const response = await api.post("/user/auth", {
      login: login,
      password: password,
    });
    return response.data;
  } catch (error) {
    console.log(error.response.data);
    return error.message;
  }
}
