import styled from "styled-components";
import { spacing } from "../../../GlobalStyle";

const Container = styled.section`
  height: 80vh;
  margin-top: ${spacing.top};
  background: url(${(props) => props.$bgUrl}) no-repeat center / cover;
  position: relative;
`;

const WhiteBg = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 0.35) 0%,
    rgba(255, 255, 255, 0.37) 55%,
    rgba(255, 255, 255, 0.3) 100%
  );
`;

const ConWrap = styled.div`
  position: absolute;
  bottom: 7%;
  left: 5%;
  h3 {
    font-size: 70px;
    font-weight: 700;
    letter-spacing: -3px;
    margin-bottom: 30px;
    position: relative;
  }

  p {
    width: 700px;
    font-size: 20px;
    line-height: 30px;
    font-weight: 500;
  }
`;

export const MainBanner = ({ attractData, randomIndex }) => {
  return (
    <Container $bgUrl={attractData[randomIndex].MAIN_IMG_NORMAL}>
      <WhiteBg />
      <ConWrap>
        <h3>{attractData[randomIndex].PLACE}</h3>
        <p>{attractData[randomIndex].ITEMCNTNTS.slice(0, 200) + "..."}</p>
      </ConWrap>
    </Container>
  );
};
