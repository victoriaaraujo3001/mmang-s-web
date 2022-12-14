import styled from "styled-components";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { Colors } from "../../themes/themes";

export const Container = styled.div`
  margin-top: 4%;
  width: 100%;
  min-height: 50vh;
  max-height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;

export const Content = styled.div`
  width: 100%;
  height: 95%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export const ConteinerInfoGeneral = styled.div`
  width: 40%;
  height: 90%;
  padding: 1% 1%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const ContentInfoAnime = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: space-between;
`;

export const ContentInfo = styled.div`
  margin: 0.5%;
  width: 80%;
  height: 100px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px,
    rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;
`;

export const ContainerRequest = styled.div`
  width: 15%;
  height: 85%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  /* border-right: 1px solid ${Colors.text2};
  border-top: 1px solid ${Colors.text2}; */
`;

export const ContainerImg = styled.div`
  width: 55px;
  height: 70px;
  background-color: #000;
  border-radius: 12px;
`;

export const ImgCapa = styled.img`
  width: 100%;
  height: 100%;
  opacity: 0.8;
  border-radius: 12px;
`;

export const InfoBuy = styled.div`
  width: 20%;
  height: 100%;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const Name = styled.span`
  font-size: 1.4rem;
  color: ${Colors.text};
`;

export const NumberRequests = styled.span`
  font-size: 1rem;
  color: ${Colors.text2};
`;

export const Amount = styled.span`
  font-family: "Roboto", sans-serif;
  font-weight: 600;
  font-size: 1rem;
  padding-left: 3px;
`;

export const IconRequest = styled(HiOutlineClipboardDocumentList)`
  color: ${Colors.text2};
  font-size: 20px;
  margin: 0 2%;
`;
