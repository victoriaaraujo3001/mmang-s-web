import styled from "styled-components";
import { BsCartPlus } from "react-icons/bs";
import { Colors } from "../../themes/themes";

export const Container = styled.div`
  width: 1100px;
  min-height: 80%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: left;
`;

export const Content = styled.div`
  width: 25%;
  height: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  margin-bottom: 2%;
`;

export const ImgManga = styled.img`
  width: 75%;
  height: 60%;
  border-radius: 6px;
  opacity: 0.8;
`;
1;
export const Info = styled.div`
  width: 90%;
  height: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  text-align: center;
  color: ${Colors.text};
`;

export const Price = styled.span`
  font-family: "Roboto", sans-serif;
  font-weight: bold;
`;

export const Cart = styled(BsCartPlus)`
  font-size: 25px;
`;
