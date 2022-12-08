import { useEffect, useState } from "react";
import { PromotionsMangas } from "../../controller/promotions";
import { ContainerTitle } from "../ContainerTitle";
import * as S from "./style";

export const Promotions = () => {
  //informações do manga
  const [booksOnSale, setBooksOnSale] = useState();
  //função que traz os dados da api
  async function getBooksOnSale() {
    const response = await PromotionsMangas();
    console.log();
    setBooksOnSale(response);
  }
  //para fazer a renderização quando executa a requisição
  useEffect(() => {
    getBooksOnSale();
  }, []);

  return (
    <>
      <ContainerTitle text={"Ofertas imperdíveis"} />
      <S.Container>
        {booksOnSale?.map((index) => {
          var preco = parseFloat(index.preco).toFixed(2);
          return (
            <S.Content>
              <S.ImgManga>
                <S.Ticket>
                  <S.Sale />
                </S.Ticket>
                <S.Img src={index.capa} />
              </S.ImgManga>
              <S.Info>
                <S.NameSale>{index.nome}</S.NameSale>
                <S.Price>R${preco}</S.Price>
                <span>cod.{index.cod_livro}</span>
              </S.Info>

              <S.Button>
                <S.Cart /> <span>Comprar</span>
              </S.Button>
            </S.Content>
          );
        })}
      </S.Container>
    </>
  );
};
