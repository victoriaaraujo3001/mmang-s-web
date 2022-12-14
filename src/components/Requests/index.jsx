import { useEffect } from "react";
import { useState } from "react";
import { AllRequests } from "../../controller/requests";
import * as S from "./style";

export const Requests = () => {
  //guardar as informaçoes que vem da api
  const [requests, setRequests] = useState([]);
  //função que faz a requisição
  async function GetAllRequests() {
    const response = await AllRequests();
    console.log("aqui response:", requests);
    setRequests(response);
  }

  useEffect(() => {
    GetAllRequests();
  }, []);
  return (
    <S.Container>
      <S.Content>
        {requests?.map((index) => {
          return (
            <>
              <S.ContentInfo>
                <S.ContainerRequest>
                  <S.IconRequest />
                  <S.NumberRequests>Pedido: {index.id_pedido}</S.NumberRequests>
                </S.ContainerRequest>
                <S.ConteinerInfoGeneral>
                  <S.ContainerImg>
                    <S.ImgCapa src={index.capa} />
                  </S.ContainerImg>
                  <S.ContentInfoAnime>
                    <span>{index.nome}</span>
                    <span>
                      valor: {parseFloat(index.preco_manga).toFixed(2)}
                    </span>
                  </S.ContentInfoAnime>
                </S.ConteinerInfoGeneral>
                <S.InfoBuy>
                  <span>unidade(s): {index.qtde_unidades}</span>
                  <span>
                    Total compra:
                    <S.Amount>
                      {parseFloat(index.total_compra).toFixed(2)}
                    </S.Amount>
                  </span>
                </S.InfoBuy>
              </S.ContentInfo>
            </>
          );
        })}
      </S.Content>
    </S.Container>
  );
};
