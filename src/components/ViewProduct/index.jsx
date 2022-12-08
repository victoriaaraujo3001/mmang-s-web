import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { FindMangaByCod } from "../../controller/mangáByCode";
import * as S from "./style";

export const ViewProduct = () => {
  //guardar os valores que vem da api
  const [book, setBook] = useState();
  //estados para o contador
  const [counter, setCounter] = useState(0);

  const [currentValue, setCurrentValue] = useState(0);
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
  // pegar o cod que esta sendo passado pela url
  const { state } = useLocation();
  const { cod } = state;
  //função que trás os dados da api
  async function getInfoManga() {
    const response = await FindMangaByCod(cod);
    console.log(
      "🚀 ~ file: index.jsx:13 ~ getInfoManga ~ response",
      response.data
    );
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
          <S.BuyButton onClick={() => totalOrderAmount()}>
            <S.BoxBuyButton>
              <S.IconRequest />
              comprar
            </S.BoxBuyButton>
          </S.BuyButton>
        </S.Footer>
      </S.Content>
    </S.Container>
  );
};
