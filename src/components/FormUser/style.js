import styled from "styled-components";
import { BsPerson } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { HiOutlineKey } from "react-icons/hi";

export const Container = styled.div`
  width: 45%;
  height: 90%;
  background-color: #1b263b;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

export const Content = styled.div`
  width: 80%;
  height: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

export const BoxInput = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;

export const Input = styled.input`
  border: none;
  outline: none;
  border-bottom: 2px solid #778da9;
  background-color: transparent;
  width: 80%;
  padding: 2%;
  color: #f8f9fa;
  font-size: 1rem;

  ::placeholder {
    color: #f8f9fa;
  }
`;

export const Form = styled.form`
  width: 90%;
  height: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

export const Button = styled.button`
  outline: none;
  width: 70%;
  height: 10%;
  background-color: #778da8;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 10px;
  color: #0d1b2a;
`;

export const Footer = styled.div`
  width: 80%;
  height: 20%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  color: #f8f9fa;
`;

export const Title = styled.span`
  font-family: "Kavoon", cursive;
  font-size: 3.5rem;
  color: #f8f9fa;
`;

export const LoginIcon = styled(BsPerson)`
  font-size: 25px;
  color: #e0e1dd;
`;

export const EmailIcon = styled(MdOutlineEmail)`
  font-size: 25px;
  color: #e0e1dd;
`;

export const PasswordIcon = styled(HiOutlineKey)`
  font-size: 25px;
  color: #e0e1dd;
`;
