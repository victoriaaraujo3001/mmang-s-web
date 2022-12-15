import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CategoryById } from "../../controller/categoryById";
import { ContainerTitle } from "../ContainerTitle";
import * as S from "./style";

export const ViewProducts = () => {
  //informações do manga
  const [books, setBooks] = useState();
  //pagando id e nome da categoria (pela rota)
  const { state } = useLocation();
  const { id, name } = state;
  //navegação para renderizar um mangá
  const navigate = useNavigate();
  //função que traz os dados da api
  async function handleGetProducts() {
    const response = await CategoryById(id);
    setBooks(response);
  }

  async function FilterManga(cod, nome, preco, capa) {
    navigate(`/manga/${cod}`, {
      state: { cod: cod },
    });
  }

  //para fazer a requisição cada vez que mudar a categoria
  useEffect(() => {
    handleGetProducts();
  }, [state]);

  return (
    <>
      <ContainerTitle text={name} />
      <S.Container>
        {books?.map((index) => {
          var preco = parseFloat(index.preco).toFixed(2);
          return (
            <S.Content>
              <S.ImgManga src={index.capa} />
              <S.Info>
                <span>{index.nome}</span>
                <S.Price>R${preco}</S.Price>
                <span>cod.{index.codigo}</span>
              </S.Info>
              <S.Button onClick={() => FilterManga(index.codigo)}>
                <S.Cart /> <span>Comprar</span>
              </S.Button>
            </S.Content>
          );
        })}
      </S.Container>
    </>
  );
};
