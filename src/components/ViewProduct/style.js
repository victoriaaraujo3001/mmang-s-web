import styled from "styled-components";

export const Container = styled.div`
  margin-top: 4%;
  width: 80%;
  height: 70vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;

export const Content = styled.div`
  width: 35%;
  height: 90%;
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

export const ContentRight = styled.div`
  width: 50%;
  height: 90%;
  border: 1px solid red;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContainerImg = styled.div`
  width: 55%;
  height: 85%;
  background-color: #000;
  border-radius: 8px;
`;

export const ImgCapa = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  opacity: 0.5;
`;
