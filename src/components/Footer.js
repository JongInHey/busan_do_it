import styled from "styled-components";

const Container = styled.footer`
  height: 150px;
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 200px;
  background-color: rgba(0, 0, 0, 0.1);
`;

export const Footer = () => {
  return <Container>&copy; jonginhey 2024</Container>;
};
