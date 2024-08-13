import styled from "styled-components";
import { colors } from "../GlobalStyle";

const Container = styled.footer`
  height: 150px;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 200px;
  background-color: ${colors.point};
  color: white;
`;

export const Footer = () => {
  return <Container>&copy; 2024․ JongInHey.</Container>;
};
