import { useEffect, useState } from "react";
import { AllCategories } from "../../controller/categories";
import { CategoriesModal } from "../modals/CategoriesModal";
import { useNavigate } from "react-router-dom";
import * as S from "./style";

export const ListCategories = ({closeModal}) => {

  const [list, setList] = useState(null);
  const navigate = useNavigate();

  async function getList() {
    const response = await AllCategories();
    console.log(response)
    return setList(response);
  }

  async function filterByIdCategory(id){
    navigate(`/categorias/${id}`)
  }

  useEffect(() => {
    getList();
  }, []);

  return (
    <CategoriesModal closeModal={closeModal}>
      <S.BoxOptions>
        {list?.map((index) => {
          return <S.Option onClick={() => filterByIdCategory(index.id)} key={index.id}>{index.categoria}</S.Option>;
        })}
      </S.BoxOptions>
    </CategoriesModal>
  );
};
