import { BiCommentError } from "react-icons/bi";
import { PageTitle } from "../components/PageTitle";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useScrollTop } from "../lib/useScrollTop";
import { colors } from "../GlobalStyle";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    font-size: 24px;
    margin-bottom: 24px;
    font-weight: 600;
  }

  a {
    padding: 12px 24px;
    font-size: 18px;
    background-color: ${colors.gradient};
    transition: all 0.3s ease;
    border-radius: 10px;
    transition: 0.3s ease;
    margin-bottom: 10px;

    &:hover {
      transform: translateY(-2px);
    }
  }

  @media screen and (max-width: 768px) {
    p {
      font-size: 16px;
      margin-bottom: 20px;
    }
  }
`;

const Wrap = styled.div`
  svg {
    font-size: 72px;
    position: relative;
    top: 30px;
    left: 100%;
    color: ${colors.point};
  }

  h1 {
    font-size: 72px;
    font-weight: 700;
    margin-bottom: 16px;
  }
`;

export const PageNotFound = () => {
  useScrollTop();
  return (
    <>
      <PageTitle titleName={"없습니다!!"} />
      <Container>
        <Wrap>
          <BiCommentError />
          <h1>404</h1>
        </Wrap>
        <p>Sorry. We can't find the page you're looking for.</p>
        <p>페이지를 찾을 수 없습니다.</p>
        <Link to="/">Home으로 돌아가기</Link>
      </Container>
    </>
  );
};
