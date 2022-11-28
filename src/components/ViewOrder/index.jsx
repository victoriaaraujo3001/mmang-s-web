import { useEffect, useState } from "react";
import { CategoryById } from "../../controller/categoryById";
import { ContainerTitle } from "../ContainerTitle";

export const ViewOrder = () => {
  const [books, setBooks] = useState();
  const path = window.location.pathname.split("/").pop();
  console.log("----", path);

  async function handleGetProducts() {
    const response = await CategoryById(path);
    setBooks(response);
    console.log(response)
  }
  useEffect(() => {
    handleGetProducts();
  }, []);

  return (
    <>
    <ContainerTitle text={path}/>
      {books?.map((index) => {
        return <span>{index.nome}</span>;
      })}
    </>
  );
};
