import { useEffect } from "react";
import { useState } from "react";
import notFoundImg from "../../assets/notFoundRequests.png";
import toast, { Toaster } from "react-hot-toast";
import { DeleteOrderById } from "../../controller/deleteOrder";
import { FinalizeOrderById } from "../../controller/finalizeOrder";
import { AllRequests } from "../../controller/requests";
import * as S from "./style";

export const Requests = () => {
  //guardar as informaçoes que vem da api
  const [requests, setRequests] = useState([]);
  //função que faz a requisição
  async function GetAllRequests() {
    const response = await AllRequests();
    setRequests(response);
  }
  // função de finalizar pedido
  async function Finalize(id) {
    const response = await FinalizeOrderById(id);

    if (response.status == 200) {
      setTimeout(() => {
        toast.success("Pedido finalizado com sucesso");
      }, 1000);
    }
  }
  //função de excluir pedido
  async function Delete(id) {
    const response = await DeleteOrderById(id);

    if (response.status == 200) {
      setTimeout(() => {
        toast.error("Pedido excluido com sucesso"), location.reload();
      }, 1500);
    }
  }

  useEffect(() => {
    GetAllRequests();
  }, []);

  return (
    <S.Container>
      <S.Content>
        {requests.length === 0 ? (
          <S.ContainerNotFound>
            <S.MessageNotFound>Você não tem pedidos</S.MessageNotFound>
            <S.ImageNotFound src={notFoundImg} />
          </S.ContainerNotFound>
        ) : (
          requests?.map((index) => {
            return (
              <>
                <S.Title>Pedidos</S.Title>
                <S.ContainerButtons>
                  <S.ContentInfo>
                    <S.ContainerRequest>
                      <S.IconRequest />
                      <S.NumberRequests>
                        Pedido: {index.id_pedido}
                      </S.NumberRequests>
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
                  <S.Button
                    onClick={() => Finalize(index.id_pedido)}
                    title="Finalizar pedido"
                  >
                    <S.IconChecked />
                  </S.Button>
                  <S.Button
                    onClick={() => Delete(index.id_pedido)}
                    title="Excluir pedido"
                  >
                    <S.IconDelete />
                  </S.Button>
                </S.ContainerButtons>
                <Toaster
                  position="top-right"
                  toastOptions={{
                    style: {
                      background: "#eeeded",
                      color: "#161B33",
                      marginTop: "4%",
                    },
                  }}
                />
              </>
            );
          })
        )}
      </S.Content>
    </S.Container>
  );
};
