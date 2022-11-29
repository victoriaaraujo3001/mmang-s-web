import { useEffect, useState } from "react";
import { AllCategories } from "../../controller/categories";
import { CategoriesModal } from "../modals/CategoriesModal";
import { useNavigate } from "react-router-dom";
import * as S from "./style";

export const ListCategories = ({ closeModal }) => {
  const [list, setList] = useState(null);
  const navigate = useNavigate();

  async function getList() {
    const response = await AllCategories();
    return setList(response);
  }

  async function filterByIdCategory(id, name) {
    navigate(`/categorias/${id}`, { state: { id: id, name: name } });
  }

  useEffect(() => {
    getList();
  }, []);

  return (
    <CategoriesModal closeModal={closeModal}>
      <S.BoxOptions>
        {list?.map((index) => {
          return (
            <S.Option
              onClick={() => filterByIdCategory(index.id, index.categoria)}
              key={index.id}
            >
              {index.categoria}
            </S.Option>
          );
        })}
      </S.BoxOptions>
    </CategoriesModal>
  );
};
