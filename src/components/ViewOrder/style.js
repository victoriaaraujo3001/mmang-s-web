import styled from "styled-components";
import { BsCartPlus } from "react-icons/bs";

export const Container = styled.div`
  width: 80%;
  height: 70%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
`;

export const Content = styled.div`
  width: 25%;
  height: 92%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

export const ImgManga = styled.img`
  width: 75%;
  height: 60%;
  border-radius: 6px;
`;

export const Info = styled.div`
  width: 90%;
  height: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  text-align: center;
  color: #f8f9fa;
`;

export const Price = styled.span`
  font-family: "Roboto", sans-serif;
  font-weight: bold;
`;

export const Cart = styled(BsCartPlus)`
  font-size: 25px;
`;
