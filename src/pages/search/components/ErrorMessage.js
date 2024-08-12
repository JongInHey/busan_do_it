import styled from "styled-components";
import { colors } from "../../../GlobalStyle";

const SErrorMessage = styled.h3`
  font-size: 18px;
  margin-top: 20px;
  color: ${colors.point};

  @media screen and (max-width: 768px) {
    font-size: 14px;
    margin-top: 13px;
  }
`;

export const ErrorMessage = ({ message }) => {
  return <SErrorMessage>{message}</SErrorMessage>;
};
