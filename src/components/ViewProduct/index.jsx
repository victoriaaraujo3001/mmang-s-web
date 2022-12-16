import { CircularProgress } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import { FindMangaByCod } from "../../controller/mangáByCode";
import * as S from "./style";
import { api } from "../../services/api";
import { RegisterFavorite } from "../../controller/addFavorite";
import { BsFillBookmarkHeartFill } from "react-icons/bs";
import { DisfavorMangaById } from "../../controller/disfavor";

export const ViewProduct = () => {
  const navigate = useNavigate();
  //guardar os valores que vem da api
  const [book, setBook] = useState();
  //estados para o contador
  const [counter, setCounter] = useState(1);
  //armazena valor total
  const [currentValue, setCurrentValue] = useState(0);
  //logica para carregando
  const [loading, setLoading] = useState(false);
  //logica para salvar o favorite
  const [favorite, setFavorite] = useState();
  //logica para desfavoritar
  const [disfavor, setDisfavor] = useState();
  //função de somar
  function handleClickSum() {
    setCounter(counter + 1);
    TotalAmount(counter + 1);
  }
  //função de subtrair
  function handleClickSubtraction() {
    if (counter == 1) return;
    setCounter(counter - 1);
    TotalAmount(counter - 1);
  }
  //função valor total
  function TotalAmount(qtdeBook) {
    setCurrentValue(book?.preco * qtdeBook);
  }
  //função que adiciona pedido na api
  async function Add(id_manga, preco_manga, qtde_unidades, total_compra) {
    if (counter) setLoading(true);
    //adicionar objeto do pedido
    //execeção que foi necessária para efetuar o pedido
    await api
      .post("/requests/register", {
        id_manga,
        preco_manga,
        qtde_unidades,
        total_compra: currentValue,
      })
      .then(({ data }) => {
        toast.success("Pedido adicionado com sucesso");
        setTimeout(() => navigate("/pedidos"), 2000);
        console.log(data);
      })
      .catch((error) => {})
      .finally(() => {
        setLoading(false);
      });
  }
  // pegar o cod que esta sendo passado pela url
  const { state } = useLocation();
  const { cod } = state;
  //função que trás os dados da api
  async function getInfoManga() {
    const response = await FindMangaByCod(cod);
    setBook(response.data);
    setCurrentValue(response.data?.preco);
  }
  //adicionar um favorito
  async function AddFavorite(id_manga) {
    const response = await RegisterFavorite(id_manga);
    setFavorite(response?.data);
    console.log("response favorite", response.data, "------");
  }
  //desfavoritar
  async function Disfavor(id) {
    const response = await DisfavorMangaById(id);
    setDisfavor(response);
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
        <S.ContainerSave>
          <button onClick={()=> console.log(favorite)}>asdsad</button>
          <S.Name>{book?.nome}</S.Name>  
          {favorite?.status == 1 ? (
            <button onClick={() => Disfavor(book?.id)} >asdasd</button>
          ) : (
            <S.IconSaveFavorite title="Favoritar mangá" onClick={() => AddFavorite(book?.id)}/>
            )}
        </S.ContainerSave>
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
          <S.Price>R$ {parseFloat(currentValue).toFixed(2)}</S.Price>
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
              Add(book?.id, book?.preco, counter);
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
            color: "#161B33",
            marginTop: "4%",
          },
        }}
      />
    </S.Container>
  );
};
