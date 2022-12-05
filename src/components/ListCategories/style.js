import styled from "styled-components";
import { Colors } from "../../themes/themes";

export const BoxOptions = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  flex-wrap: wrap;
  max-height: 90%;
  justify-content: space-around;
  align-items: center;
`;

export const Option = styled.span`
  font-size: 1.1rem;
  width: 30%;
  height: 15%;
  padding: 0.6%;
  color: ${Colors.text};
  text-align: center;
  :hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;
