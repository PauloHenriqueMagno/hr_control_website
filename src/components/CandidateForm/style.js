import styled from "styled-components";

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 25px;
  align-items: center;

  .input {
    display: flex;
    justify-content: start;
    margin-right: auto;
    margin-top: 10px;

    p {
      width: max-content;
      padding-right: 10px; 
    }
  }
`;

export const HSecondStyled = styled.h2`
  width: 100%;
  text-align: start;
  padding: 0;
  margin: 0;
`;

export const PStyled = styled.p`
  width: 100%;
  text-align: start;
  padding: 10px 0 0 0;
  margin: 0;
`;

export const ErrorStyled = styled.p`
  width: 100%;
  text-align: start;
  padding: 10px 0 0 0;
  margin: 0;
`;

export const ButtonSubmitStyled = styled.button`
  background: #85C38B;
  padding: 8px 15px;
  border-radius: 8px;
  border: none;
  font-weight: 600;
  margin-left: auto;

  &:hover {
    filter: brightness(110%);
  }

  &:active {
    filter: brightness(80%);
  }
`;