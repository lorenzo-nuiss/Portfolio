import styled from "styled-components";

export const ContainerMain = styled.main``;

export const Title = styled.h2`
  margin-top: 2px;
  margin-bottom: 16px;
`;

// ------ MODAL ------

export const ModalContainer = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  gap: 17px;
  align-items: center;
`;

export const ModalTitle = styled.h3`
  text-align: center;
  margin-bottom: 8px;
`;

export const ModalSubtitle = styled.h4`
  font-weight: 500;
  margin-bottom: 15px;
`;

// text erreur
export const ErrorText = styled.span`
  color: #c75438;
  margin-bottom: -10px;
`;

export const ModalTextLink = styled.p`
  text-decoration: underline;
  font-weight: 500;
  :hover {
    cursor: pointer;
  }
`;

export const InputDark = styled.input`
  background-color: #131d26;
  border: none;
  padding: 12px;
  border-radius: 5px;
  :focus-visible {
    outline: 2px solid #c2aff0;
  }
  :placeholder {
    color: rgba(255, 255, 255, 0.4);
  }
`;
export const InputContainer = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
`;

export const InputsBlock = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 40px;
  text-align: left;
  width: 100%;
`;

export const ButtonContainersI = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  margin: 10px 0;
  font-size: 16px;
  color: #1e2025;
  background-color: #c2aff0;
  border: 2px solid #c2aff0;
  border-radius: 10px;
  padding: 12px 28px;
  cursor: pointer;
  font-weight: 600;
`;

/**
 * Icone de l'input
 */
export const InputIcon = styled.i`
  font-size: 1.2rem;
  color: currentColor;
  margin-right: 10px;
`;
