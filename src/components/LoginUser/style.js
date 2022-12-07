import styled from "styled-components";
import { BsPerson } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { HiOutlineKey, HiKey } from "react-icons/hi";
import { Colors } from "../../themes/themes";

export const Container = styled.div`
  width: 45%;
  height: 90%;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background-color: ${Colors.color1};
`;

export const Content = styled.div`
  width: 80%;
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

export const BoxInput = styled.div`
  width: 90%;
  height: 20%;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-evenly;
  border-bottom: 2px solid ${Colors.secondary};
`;

export const Input = styled.input`
  border: none;
  outline: none;
  background-color: transparent;
  width: 90%;
  height: 50%;
  padding: 2%;
  color: ${Colors.secondary};
  font-size: 1rem;

  ::placeholder {
    color: ${Colors.secondary};
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
  background-color: ${Colors.primary};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 10px;
  color: ${Colors.color4};
`;

export const Footer = styled.div`
  width: 80%;
  height: 20%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  color: ${Colors.text};
`;

export const Title = styled.span`
  text-align: center;
  font-size: 3.5rem;
  color: ${Colors.secondary};
  width: 80%;
  border-bottom: 1px solid ${Colors.secondary};
`;

export const LinkRegister = styled.span`
  color: ${Colors.text};
  :hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const LoginIcon = styled(BsPerson)`
  font-size: 25px;
  color: ${Colors.secondary};
`;

export const EmailIcon = styled(MdOutlineEmail)`
  font-size: 25px;
  color: ${Colors.secondary};
`;

export const PasswordIcon = styled(HiOutlineKey)`
  font-size: 25px;
  color: ${Colors.secondary};
`;

export const ViewPasswordIcon = styled(HiKey)`
  font-size: 25px;
  color: ${Colors.secondary};
`;
