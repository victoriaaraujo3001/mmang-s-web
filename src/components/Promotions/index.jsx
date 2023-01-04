import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PromotionsMangas } from "../../controller/promotions";
import { ContainerTitle } from "../ContainerTitle";
import * as S from "./style";

export const Promotions = () => {
  //informações do manga
  const [booksOnSale, setBooksOnSale] = useState();
  //state de navegação
  const navigate = useNavigate();
  //função que traz os dados da api
  async function getBooksOnSale() {
    const response = await PromotionsMangas();
    setBooksOnSale(response);
  }
  // função para navegar para a tela de view product
  async function FilterManga(cod) {
    navigate(`/manga/${cod}`, {
      state: { cod: cod },
    });
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
          var valorDesconto = parseFloat(index.valor_desconto).toFixed(2);
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
                <S.Discount>- {valorDesconto} total compra</S.Discount>
                <span>cod.{index.cod_livro}</span>
              </S.Info>
              <S.Button onClick={() => FilterManga(index.cod_livro)}>
                <S.Cart /> <span>Comprar</span>
              </S.Button>
            </S.Content>
          );
        })}
      </S.Container>
    </>
  );
};
