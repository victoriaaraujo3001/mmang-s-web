import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { CategoryById } from "../../controller/categoryById";
import { BuyButton } from "../BuyButton";
import { ContainerTitle } from "../ContainerTitle";
import * as S from "./style";

export const ViewOrder = () => {
  const [books, setBooks] = useState();

  const { state } = useLocation();
  const { id, name } = state;

  async function handleGetProducts() {
    const response = await CategoryById(id);
    setBooks(response);
  }

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
              <BuyButton icon={<S.Cart />} text={"Comprar"} />
            </S.Content>
          );
        })}
      </S.Container>
    </>
  );
};
