import styled from "styled-components";
import { AiOutlineCloseCircle } from "react-icons/ai";

export const Container = styled.div`
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Content = styled.div`
  display: flex;
  height: 50%;
  width: 60%;
  background-color: #778da9;
  border-radius: 6px;
  align-items: center;
`;

export const ButtonCloseModal = styled.button`
  align-self: flex-start;
  padding: 1%;
`;

export const CloseIcon = styled(AiOutlineCloseCircle)`
  font-size: 28px;
  padding: 1% 2%;
  color: #1b263b;
  :hover {
    color: #e0e1dd;
  }
`;
