import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { FindMangaByCod } from "../../controller/mangáByCode";
import * as S from "./style";

export const ViewProduct = () => {
  //guardar os valores que vem da api
  const [book, setBook] = useState();
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
        {cod}-{book?.qntd_estoque} -{book?.nome} -
        {parseFloat(book?.preco).toFixed(2)}
      </S.Content>
    </S.Container>
  );
};
