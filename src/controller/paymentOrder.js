import { api } from "../services/api";

export async function PaymentOrder(nome, totalCompra) {
  try {

    const response = await api.post(`/payment/${nome}`, {totalCompra});

    return response.data;
  } catch (error) {

    return {
      response: error.response,
      message: error.response.message,
      status: error.response.status,
    };
  }
}
