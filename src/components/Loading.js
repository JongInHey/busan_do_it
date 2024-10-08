import { HashLoader } from "react-spinners";
import styled from "styled-components";
import { colors } from "../GlobalStyle";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Loading = () => {
  return (
    <Container>
      <HashLoader color={colors.point} size={80} />
    </Container>
  );
};
