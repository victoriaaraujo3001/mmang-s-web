import styled from "styled-components";
import { Colors } from "../../themes/themes";

export const Button = styled.button`
  width: 90%;
  height: 10%;
  background-color: ${Colors.primary};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 10px;
  color: ${Colors.color1};
`;
