import { api } from "../services/api";

export async function AddRequests(
  id_manga,
  preco_manga,
  qtde_unidades,
  total_compra
) {
  try {
    const response = await api.post("/requests/register", {
      id_manga,
      preco_manga,
      qtde_unidades,
      total_compra,
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
