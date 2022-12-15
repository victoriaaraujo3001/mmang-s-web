import styled from "styled-components";
import Logo from "../../assets/logo.png";
import { BsSearch, BsPersonCircle, BsBookmarkHeartFill } from "react-icons/bs";
import { GiOpenBook } from "react-icons/gi";
import { FaShoppingCart } from "react-icons/fa";
import { Colors } from "../../themes/themes";

export const Nav = styled.div`
  width: 100%;
  height: 12vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  background-color: #eeeded;
  font-family: "Poppins", sans-serif;
  z-index: 1;
`;

export const Items = styled.div`
  width: 40%;
  height: 80%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;

export const Item = styled.div`
  width: 25%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  font-size: 0.9rem;
  text-align: center;
  color: ${Colors.text};
  :hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

export const ContainerInput = styled.div`
  width: 30%;
  height: 40%;
  display: flex;
  align-items: center;
  border: 1px solid ${Colors.secondary};
  border-radius: 6px;
`;

export const ContainerImage = styled.div`
  width: 25%;
  height: 80%;
  display: flex;
  align-items: center;
  background-image: url(${Logo});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const IconSearch = styled(BsSearch)`
  color: ${Colors.secondary};
  font-size: 24px;
  width: 10%;
`;

export const IconCategory = styled(GiOpenBook)`
  color: ${Colors.primary};
  font-size: 25px;
`;

export const IconBag = styled(BsBookmarkHeartFill)`
  color: ${Colors.primary};
  font-size: 25px;
`;

export const IconRequest = styled(FaShoppingCart)`
  color: ${Colors.primary};
  font-size: 25px;
`;

export const IconAccount = styled(BsPersonCircle)`
  color: ${Colors.primary};
  font-size: 25px;
`;

export const InputSearch = styled.input`
  width: 85%;
  height: 100%;
  background: transparent;
  border: none;
  outline: none;
  color: ${Colors.secondary};
  padding: 1% 2%;

  ::placeholder {
    color: ${Colors.secondary};
  }
`;

export const Title = styled.span`
  font-family: "Kavoon", cursive;
  text-align: center;
  font-size: 3rem;
  color: ${Colors.secondary};
  cursor: pointer;
`;
