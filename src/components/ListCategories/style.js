import styled from "styled-components";

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
  font-size: 1.2rem;
  width: 30%;
  height: 15%;
  padding: 0.6%;
  color: #e0e1dd;
  text-align: center;
  :hover {
    color: #1b263b;
    cursor: pointer;
  }
`;
