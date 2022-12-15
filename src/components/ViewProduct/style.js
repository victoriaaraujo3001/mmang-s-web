import styled from "styled-components";
import { FaShoppingCart } from "react-icons/fa";
import { RiShoppingBag3Fill } from "react-icons/ri";
import { BsBookmarkHeart } from "react-icons/bs";
import { Colors } from "../../themes/themes";

export const Container = styled.div`
  margin-top: 4%;
  width: 80%;
  height: 75vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;

export const Content = styled.div`
  width: 35%;
  height: 90%;
  padding: 1% 1.2%;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: space-around;
`;

export const ContentRight = styled.div`
  width: 50%;
  height: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContainerImg = styled.div`
  width: 55%;
  height: 85%;
  background-color: #000;
  border-radius: 8px;
`;

export const ImgCapa = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  opacity: 0.5;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  padding: 1.5% 0;
  justify-content: space-between;
  width: 100%;
  height: 15%;
  border-bottom: 1px solid ${Colors.color2};
`;

export const QtdeBooks = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 20%;
`;

export const BoxCounter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 50%;
  height: 100%;
`;

export const Footer = styled.div`
  width: 100%;
  height: 30%;
  padding: 1% 1.2%;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: space-evenly;
`;

export const ButtonsCounter = styled.button`
  border: 1px solid ${Colors.color2};
  border-radius: 6px;
  height: 28px;
  width: 28px;
  color: #000;
  font-weight: bold;
  background: ${Colors.color4};
`;

export const BuyButton = styled.button`
  outline: none;
  width: 100%;
  height: 40%;
  background-color: ${Colors.primary};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  color: ${Colors.color1};
`;

export const BoxBuyButton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 40%;
  height: 100%;
`;

export const ContainerSave = styled.div`
  width: 100%;
  height: 20%;
  padding: 1% 1.2%;
  display: flex;
  flex-direction: row;
  align-items: left;
  justify-content: space-between;
`;

export const Name = styled.span`
  font-size: 1.4rem;
  color: ${Colors.text};
`;

export const Code = styled.span`
  font-size: 1rem;
  color: ${Colors.text2};
`;

export const Availability = styled.span`
  font-size: 1rem;
  color: ${Colors.text2};
`;

export const Price = styled.span`
  font-family: "Roboto", sans-serif;
  font-weight: bold;
  font-size: 1.2rem;
`;

export const CodeNumber = styled.span`
  font-family: "Roboto", sans-serif;
  font-weight: bold;
  color: ${Colors.color3};
`;

export const AvailabilityNumber = styled.span`
  font-family: "Roboto", sans-serif;
  font-weight: bold;
  color: ${Colors.color3};
`;

export const IconRequest = styled(FaShoppingCart)`
  color: ${Colors.color1};
  font-size: 20px;
  margin: 0 2%;
`;

export const IconBag = styled(RiShoppingBag3Fill)`
  color: ${Colors.color1};
  font-size: 20px;
  margin: 0 2%;
`;

export const IconSaveFavorite = styled(BsBookmarkHeart)`
  color: ${Colors.primary};
  font-size: 28px;
  margin: 0 2%;
`;