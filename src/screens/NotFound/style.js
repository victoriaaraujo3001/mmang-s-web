import styled from "styled-components";
import { Colors } from "../../themes/themes";

export const Container = styled.body`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContainerImg = styled.div`
  width: 70%;
  height: 70%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Img = styled.img`
  width: 600px;
  height: 600px;
`;

export const Name = styled.span`
  font-size: 1.4rem;
  color: ${Colors.text};
`;
