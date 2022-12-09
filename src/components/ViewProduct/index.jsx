import { CircularProgress } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import { FindMangaByCod } from "../../controller/mangáByCode";
import { AddRequests } from "../../controller/requests";
import * as S from "./style";

export const ViewProduct = () => {
  //guardar os valores que vem da api
  const [book, setBook] = useState();
  //estados para o contador
  const [counter, setCounter] = useState(0);
  //armazena valor total
  const [currentValue, setCurrentValue] = useState(0);
  //logica para carregando
  const [loading, setLoading] = useState(false);
  //navegação para os pedidos
  const navigate = useNavigate();
  //função de somar
  function handleClickSum() {
    setCounter(counter + 1);
  }
  //função de subtrair
  function handleClickSubtraction() {
    setCounter(counter - 1);
  }
  //contador não ficar negativo
  if (counter < 0) {
    setCounter(0);
  }
  //função de retornar valor total do pedido
  function totalOrderAmount() {
    if (counter >= 1) {
      const amount = book?.preco * counter;
      console.log(amount);
      setCurrentValue(amount);
    }
  }
  //função que adiciona pedido na api
  async function Add(id_manga, preco_manga, qtde_unidades, total_compra) {
    setLoading(true);
    //adicionar objeto do pedido
    const response = await AddRequests(
      id_manga,
      preco_manga,
      qtde_unidades,
      total_compra
    );
    switch (response.status) {
      case 201:
        setTimeout(() => {
          setLoading(false), toast.success("Pedido adicionado com sucesso");
        }, 2000);
        break;
      case 500:
        setTimeout(() => {
          setLoading(false), toast.error("Adicione uma quantidade válida");
        }, 2000);
        break;
    }
    return response;
  }
  // pegar o cod que esta sendo passado pela url
  const { state } = useLocation();
  const { cod } = state;
  //função que trás os dados da api
  async function getInfoManga() {
    const response = await FindMangaByCod(cod);
    setBook(response.data);
  }
  //renderização da função cada vez que for alterado o state
  useEffect(() => {
    getInfoManga();
  }, [state]);
  return (
    <S.Container>
      <S.ContentRight>
        <S.ContainerImg>
          <S.ImgCapa src={book?.capa} />
        </S.ContainerImg>
      </S.ContentRight>
      <S.Content>
        <S.Name>{book?.nome}</S.Name>
        <S.Info>
          <S.Code>
            codigo: <S.CodeNumber>{cod}</S.CodeNumber>
          </S.Code>
          <S.Availability>
            disponíveis:
            <S.AvailabilityNumber> {book?.qntd_estoque}</S.AvailabilityNumber>
          </S.Availability>
        </S.Info>
        <S.QtdeBooks>
          <S.Price>R$ {parseFloat(book?.preco).toFixed(2)}</S.Price>
          <S.BoxCounter>
            <S.ButtonsCounter onClick={() => handleClickSubtraction()}>
              -
            </S.ButtonsCounter>
            {counter}
            <S.ButtonsCounter onClick={() => handleClickSum()}>
              +
            </S.ButtonsCounter>
          </S.BoxCounter>
        </S.QtdeBooks>
        <S.Footer>
          <S.BuyButton>
            <S.BoxBuyButton>
              <S.IconBag />
              minha cesta
            </S.BoxBuyButton>
          </S.BuyButton>
          <S.BuyButton
            onClick={() => {
              totalOrderAmount(),
                Add(book?.id, book?.preco, counter, currentValue);
            }}
          >
            {loading ? (
              <CircularProgress isIndeterminate color="#161B33" size={"40px"} />
            ) : (
              <S.BoxBuyButton>
                <S.IconRequest />
                comprar
              </S.BoxBuyButton>
            )}
          </S.BuyButton>
        </S.Footer>
      </S.Content>
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: "#eeeded",
            border: "1px solid #161B33",
            color: "#161B33",
            marginTop: "4%",
          },
        }}
      />
    </S.Container>
  );
};
