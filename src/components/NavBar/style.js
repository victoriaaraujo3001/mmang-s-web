import styled from "styled-components";
import Logo from "../../assets/logo.png";
import { BsSearch, BsCart3, BsPersonCircle } from "react-icons/bs";
import { BiCategory } from "react-icons/bi";
import { SlHandbag } from "react-icons/sl";

export const Nav = styled.div`
  width: 100%;
  height: 12vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  background-color: #1b263b;
  font-family: "Poppins", sans-serif;
  z-index: 1;
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
  color: #F8F9FA;
  border-radius: 4px;

  :hover{
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
  color: #F8F9FA;
  font-size: 30px;
`;

export const IconBag = styled(SlHandbag)`
  color: #F8F9FA;
  font-size: 30px;
`;

export const IconRequest = styled(BsCart3)`
  color: #F8F9FA;
  font-size: 30px;
`;

export const IconAccount = styled(BsPersonCircle)`
  color: #F8F9FA;
  font-size: 30px;
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
