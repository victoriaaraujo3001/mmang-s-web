import styled from "styled-components";
import {
  BsSearch,
  BsPersonCircle,
  BsBookmarkHeartFill,
  BsFillFilePersonFill,
  BsFillPersonFill,
  BsFillCartPlusFill
} from "react-icons/bs";
import { GiOpenBook } from "react-icons/gi";
import { FaShoppingCart } from "react-icons/fa";
import { RiShoppingBag2Fill } from "react-icons/ri";
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

export const ContainerResult = styled.div`
  overflow-y: auto;
  position: absolute;
  width: 30%;
  height: 120px;
  top: 58px;
  border-radius: 8px;
  margin-top: 0.5%;
`;

export const ButtomItemResult = styled.button`
  height: 20%;
  width: 100%;
  display: flex;
  align-self: left;
  padding-top: 0.5%;
  padding-left: 1%;
  background-color: #eeeded;
  padding-bottom: 0.1%;
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

export const IconRegister = styled(BsFillFilePersonFill)`
  color: ${Colors.primary};
  font-size: 18px;
`;

export const IconLogin = styled(BsFillPersonFill)`
  color: ${Colors.primary};
  font-size: 18px;
`;

export const IconMyBag = styled(RiShoppingBag2Fill)`
  color: ${Colors.primary};
  font-size: 18px;
`;

export const IconPending = styled(BsFillCartPlusFill)`
  color: ${Colors.primary};
  font-size: 18px;
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
