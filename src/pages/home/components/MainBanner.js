import styled from "styled-components";

const Container = styled.section`
  height: 85vh;
  background: url(${(props) => props.$bgUrl}) no-repeat center / cover;
  position: relative;
  word-break: ${(props) => (props.$isbreak ? "normal" : "keep-all")};
`;

const WhiteBg = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.48) 0%,
    rgba(0, 0, 0, 0.6) 55%,
    rgba(0, 0, 0, 0.2) 100%
  );
`;

const ConWrap = styled.div`
  position: absolute;
  bottom: 7%;
  left: 5%;
  color: white;
  h3 {
    font-size: 70px;
    font-weight: 700;
    letter-spacing: -3px;
    margin-bottom: 30px;
    position: relative;
  }

  p {
    width: 650px;
    font-size: 20px;
    line-height: 30px;
    font-weight: 400;
    opacity: 0.8;
  }

  @media screen and (max-width: 768px) {
    left: 4%;
    margin-right: 10px;
    h3 {
      font-size: 32px;
      letter-spacing: -1px;
      margin-bottom: 20px;
      line-height: 40px;
    }

    p {
      max-width: 500px;
      width: 100%;
      font-size: 14px;
      line-height: 24px;
    }
  }
`;

export const MainBanner = ({ allData, randomIndex, isbreak }) => {
  return (
    <Container $bgUrl={allData[randomIndex].MAIN_IMG_NORMAL} $isbreak={isbreak}>
      <WhiteBg />
      <ConWrap>
        <h3>{allData[randomIndex].PLACE}</h3>
        <p>{allData[randomIndex].ITEMCNTNTS.slice(0, 100) + "..."}</p>
      </ConWrap>
    </Container>
  );
};
