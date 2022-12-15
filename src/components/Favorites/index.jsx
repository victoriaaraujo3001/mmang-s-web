import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { AllFavoritesMangas } from "../../controller/favorites";
import { ContainerTitle } from "../ContainerTitle";
import * as S from "./style";

export const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  async function ListFavorites() {
    const response = await AllFavoritesMangas();
    setFavorites(response);
  }

  useEffect(() => {
    ListFavorites();
  }, []);

  console.log(favorites)

  return (
    <>
      <ContainerTitle text={"Favoritos"} />
      <S.Container>
        {favorites?.map((index) => {
          var preco = parseFloat(index.preco).toFixed(2);
          return (
            <S.Content>
              <span>Teste</span>
            </S.Content>
          );
        })}
      </S.Container>
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
};
