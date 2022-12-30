import styled from "styled-components";
import { BsCartPlus } from "react-icons/bs";
import { MdOutlineFavorite } from "react-icons/md";
import { FaHeartBroken } from "react-icons/fa";
import { Colors } from "../../themes/themes";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: left;
`;

export const Button = styled.button`
  margin: 1%;
  width: 70%;
  height: 60px;
  background-color: ${Colors.primary};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 10px;
  color: ${Colors.color1};
  font-family: "Poppins";
  font-weight: bold;
`;

export const ButtonBack = styled.button`
  width: 70%;
  height: 60px;
  background-color: ${Colors.color1};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 10px;
  color: ${Colors.text2};
  font-family: "Poppins";
  font-weight: bold;
`;

export const ContainerRedirectUser = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 350px;
  height: 350px;
`;

export const ImageRedirect = styled.img`
  width: 100%;
  height: 100%;
`;

export const Footer = styled.div`
  width: 80%;
  height: 30%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;

export const InfoUser = styled.span`
  width: 70%;
  text-align: center;
  font-family: "Poppins";
`;
