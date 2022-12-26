import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { FindoOrder } from "../../controller/findOrder";

export const PayOrder = () => {
  //armazenar informaçoes do pedido 
  const [infoOrder, setInfoOrder] = useState([])
  //pegar id pela rota
  const { state } = useLocation();
  const { id } = state;
  //informações da api 
  async function GetInfoOrder(){
    const response = await FindoOrder(id);
    setInfoOrder(response)
  }
  //renderizar na tela as informações
  useEffect(() => {
    GetInfoOrder();
  }, [])
  
  return (
    <div>
      <span>Teste</span>
    </div>
  );
};
