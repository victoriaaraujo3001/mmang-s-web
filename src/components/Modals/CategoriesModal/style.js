import styled from "styled-components";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { Colors } from "../../../themes/themes";

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
  height: 55%;
  width: 65%;
  background-color: ${Colors.color1};
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
  color: ${Colors.text};
  :hover {
    color: ${Colors.color3};
  }
`;
