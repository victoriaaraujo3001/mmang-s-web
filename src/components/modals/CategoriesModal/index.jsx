import { ButtonCloseModal, Container, Content, CloseIcon } from "./style";

export const CategoriesModal = ({ children, closeModal }) => {
  return (
    <Container>
      <Content>
        <ButtonCloseModal onClick={closeModal}>
          <CloseIcon />
        </ButtonCloseModal>
        {children}
      </Content>
    </Container>
  );
};
