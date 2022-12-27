import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { FindoOrder } from "../../controller/findOrder";
import { PaymentOrder } from "../../controller/paymentOrder";
import * as S from "./style";

export const PayOrder = () => {
  //armazenar informaçoes do pedido
  const [infoOrder, setInfoOrder] = useState([]);
  //pegar id pela rota
  const { state } = useLocation();
  const { id } = state;
  //informações da api
  async function GetInfoOrder() {
    const response = await FindoOrder(id);
    setInfoOrder(response.data);
  }
  async function Payment(nome, totalCompra) {
    const payment = await PaymentOrder(nome, totalCompra);
    window.open(payment, "_blank");
  }
  //renderizar na tela as informações
  useEffect(() => {
    GetInfoOrder();
  }, [id]);

  return (
    <S.Container>
      {infoOrder?.map((item) => {
        var desconto = parseFloat(item.valor_desconto).toFixed(2);
        var total = parseFloat(item.total_compra).toFixed(2);
        var valorFinal = parseFloat(total - desconto).toFixed(2);
        return (
          <>
            <S.ContainerLeft>
              <S.InfoOrder>Informações do pedido</S.InfoOrder>
              <S.ContainerInfo>
                <S.ContainerImg>
                  <S.Img src={item.capa} />
                </S.ContainerImg>
                <S.ContainerDescription>
                  <S.Name>{item.nome}</S.Name>
                  <S.InfoPrice>
                    Valor mangá:{" "}
                    <S.Price>
                      R$ {parseFloat(item.preco_manga).toFixed(2)}
                    </S.Price>
                  </S.InfoPrice>
                  <S.InfoQtd>
                    Unidades compradas: <S.Price>{item.qtde_unidades}</S.Price>{" "}
                    unid.(s)
                  </S.InfoQtd>
                  <S.InfoQtd>
                    Número pedido: <S.Price>{item.id_pedido}</S.Price>
                  </S.InfoQtd>
                  {item.valor_desconto !== null ? (
                    <S.InfoQtd>
                      Valor desconto: <S.Price>{desconto}</S.Price>
                    </S.InfoQtd>
                  ) : (
                    <S.InfoQtd>Não contém desconto</S.InfoQtd>
                  )}
                  <S.InfoQtd>
                    Valor total da compra:{" "}
                    {item.desconto == 0 ? (
                      <S.Price>R$ {total}</S.Price>
                    ) : (
                      <S.Price>R$ {valorFinal}</S.Price>
                    )}
                  </S.InfoQtd>
                </S.ContainerDescription>
              </S.ContainerInfo>
              <S.Footer>
                <S.CancelButton>
                  <S.IconCancel />
                  cancelar pedido
                </S.CancelButton>
                <S.BuyButton
                  onClick={() =>
                    Payment(item.nome, item.desconto == 0 ? total : valorFinal)
                  }
                >
                  <S.IconPay />
                  efetuar pagamento
                </S.BuyButton>
              </S.Footer>
            </S.ContainerLeft>
            <S.ContainerRight>
              <S.ContainerInfoUser>
                <S.InfoUser>Informações do usuário</S.InfoUser>
                <S.NameUser>
                  Nome: <S.InfoText>{item.login}</S.InfoText>
                </S.NameUser>
                <S.NameUser>
                  Email: <S.InfoText>{item.email}</S.InfoText>
                </S.NameUser>
              </S.ContainerInfoUser>
            </S.ContainerRight>
          </>
        );
      })}
    </S.Container>
  );
};
