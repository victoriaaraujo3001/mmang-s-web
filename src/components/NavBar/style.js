import styled from "styled-components";
import Logo from "../../assets/logo.png";
import { BsSearch, BsPersonCircle } from "react-icons/bs";
import { BiCategory } from "react-icons/bi";
import { SlHandbag } from "react-icons/sl";
import { FaShoppingCart } from "react-icons/fa";
import { Colors } from "../../themes/themes";

export const Nav = styled.div`
  width: 100%;
  height: 12vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  background-color: ${Colors.color1};
  font-family: "Poppins", sans-serif;
  z-index: 1;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

export const Items = styled.div`
  width: 40%;
  height: 80%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const Item = styled.div`
  width: 25%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  font-size: 0.9rem;
  text-align: center;
  color: ${Colors.text};
  border-radius: 4px;

  :hover {
    background-color: #778da9;
    cursor: pointer;
  }
`;

export const ContainerInput = styled.div`
  width: 30%;
  height: 40%;
  display: flex;
  align-items: center;
  border: 1px solid #778da9;
  border-radius: 6px;
`;

export const ContainerImage = styled.div`
  width: 25%;
  height: 80%;
  display: flex;
  align-items: center;
  background-image: url(${Logo});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const IconSearch = styled(BsSearch)`
  color: #778da9;
  font-size: 24px;
  width: 10%;
`;

export const IconCategory = styled(BiCategory)`
  color: ${Colors.secondary};
  font-size: 25px;
`;

export const IconBag = styled(SlHandbag)`
  color: ${Colors.secondary};
  font-size: 25px;
`;

export const IconRequest = styled(FaShoppingCart)`
  color: ${Colors.secondary};
  font-size: 25px;
`;

export const IconAccount = styled(BsPersonCircle)`
  color: ${Colors.secondary};
  font-size: 25px;
`;

export const InputSearch = styled.input`
  width: 85%;
  height: 100%;
  background: transparent;
  border: none;
  outline: none;
  color: #778da9;
  padding: 1% 2%;

  ::placeholder {
    color: #778da9;
  }
`;
