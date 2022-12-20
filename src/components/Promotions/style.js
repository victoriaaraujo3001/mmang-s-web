import styled from "styled-components";
import { BsCartPlus } from "react-icons/bs";
import { BsFillTagsFill } from "react-icons/bs";
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

export const ImgManga = styled.div`
  width: 75%;
  height: 60%;
  display: flex;
  justify-content: right;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 8px;
`;

export const Ticket = styled.div`
  width: 35px;
  height: 35px;
  background-color: ${Colors.color4};
  display: flex;
  justify-content: center;
  border-radius: 999px;
  align-items: center;
  position: absolute;
  margin: 0.2%;
`;

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

export const Button = styled.button`
  width: 90%;
  height: 10%;
  background-color: ${Colors.primary};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 10px;
  color: ${Colors.color1};
`;

export const Price = styled.span`
  font-family: "Roboto", sans-serif;
  font-weight: bold;
`;

export const Discount = styled.span`
  font-family: "Roboto", sans-serif;
  color: #a2230f;
  font-size: 0.9rem;
`;

export const NameSale = styled.span`
  width: 70%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;

export const Cart = styled(BsCartPlus)`
  font-size: 25px;
`;

export const Sale = styled(BsFillTagsFill)`
  font-size: 15px;
  color: #a2230f;
`;
