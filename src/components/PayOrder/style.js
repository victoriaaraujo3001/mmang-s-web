import styled from "styled-components";
import { Colors } from "../../themes/themes";
import { AiOutlineClose } from "react-icons/ai";
import { BsFillCreditCard2BackFill } from "react-icons/bs";

export const Container = styled.div`
  margin-top: 1%;
  width: 100%;
  height: 85vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;

export const ContainerLeft = styled.div`
  width: 50%;
  height: 95%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

export const ContainerRight = styled.div`
  width: 45%;
  height: 95%;
`;

export const ContainerImg = styled.div`
  width: 35%;
  height: 82%;
  background-color: #000;
  border-radius: 10px;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  opacity: 0.6;
  border-radius: 10px;
`;

export const ContainerInfo = styled.div`
  width: 100%;
  height: 60%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;

export const ContainerInfoUser = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: space-evenly;
`;

export const Footer = styled.div`
  width: 100%;
  height: 9%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const ContainerDescription = styled.div`
  width: 60%;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: space-around;
`;

export const BuyButton = styled.button`
  outline: none;
  width: 40%;
  height: 100%;
  background-color: ${Colors.primary};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 10px;
  color: ${Colors.color1};
`;

export const CancelButton = styled.button`
  outline: none;
  width: 40%;
  height: 100%;
  background-color: #a30202;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 10px;
  color: ${Colors.color1};
`;

export const Name = styled.span`
  font-size: 1.4rem;
  color: ${Colors.text};
`;

export const InfoOrder = styled.span`
  font-size: 1.4rem;
  color: ${Colors.text};
  display: flex;
  align-self: left;
  width: 100%;
  border-bottom: 1px solid ${Colors.color2};
`;

export const InfoUser = styled.span`
  font-size: 1.4rem;
  color: ${Colors.text};
  padding: 0.5%;
  display: flex;
  width: 100%;
  border-bottom: 1px solid ${Colors.color2};
`;

export const Price = styled.span`
  font-family: "Roboto", sans-serif;
  font-size: 1rem;
  font-weight: 800;
  color: ${Colors.text};
  padding: 0.5%;
`;

export const InfoPrice = styled.span`
  font-size: 1rem;
  color: ${Colors.text2};
  padding: 0.5%;
  border-bottom: 1px solid ${Colors.color2};
`;

export const InfoQtd = styled.span`
  font-size: 1rem;
  color: ${Colors.text2};
  padding: 0.5%;
  border-bottom: 1px solid ${Colors.color2};
`;

export const NameUser = styled.span`
  font-size: 1rem;
  color: ${Colors.text};
  border-bottom: 1px solid ${Colors.color2};
`;

export const InfoText = styled.span`
  font-size: 1rem;
  color: ${Colors.color3};
`;

export const IconCancel = styled(AiOutlineClose)`
  font-size: 22px;
  font-weight: 800;
  color: #fff;
`;

export const IconPay = styled(BsFillCreditCard2BackFill)`
  font-size: 22px;
  font-weight: 800;
  color: #fff;
`;
