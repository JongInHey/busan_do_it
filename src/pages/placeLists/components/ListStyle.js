import styled from "styled-components";
import { colors, spacing } from "../../../GlobalStyle";

export const Container = styled.section`
  padding: 150px ${spacing.side} 0;

  word-break: ${(props) => (props.$isbreak ? "normal" : "keep-all")};
  h2 {
    font-size: 60px;
    font-weight: 700;
    text-align: center;
    margin-bottom: 50px;
    line-height: 55px;

    span {
      color: ${colors.point};
    }
  }

  @media screen and (max-width: 1024px) {
    padding: 150px ${spacing.taside} 0 ${spacing.taside};
  }

  @media screen and (max-width: 768px) {
    padding: 120px ${spacing.moSide} 0 ${spacing.moSide};

    h2 {
      font-size: 40px;
      margin-bottom: 35px;
    }
  }
`;

export const SCategory = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 60px;

  @media screen and (max-width: 768px) {
    justify-content: flex-start;
  }
`;

export const Button = styled.button`
  all: unset;
  padding: 5px 15px 7px 15px;
  margin-right: 10px;
  margin-bottom: 5px;
  text-align: center;
  background-color: ${(props) =>
    props.$isSelected ? `${colors.point}` : "rgba(255, 255, 255, 0.2)"};
  border: ${(props) =>
    props.$isSelected ? 0 : "1px solid rgba(0, 0, 0, 0.2)"};
  border-radius: 30px;
  cursor: pointer;
  color: ${(props) => (props.$isSelected ? "white" : "rgba(0, 0, 0, 0.8)")};

  @media screen and (max-width: 768px) {
    margin-right: 8px;
    margin-bottom: 10px;
    font-size: 15px;
  }
`;

export const ConWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 60px;
  column-gap: 15px;
  justify-items: center;
  p {
    font-size: 18px;
    margin-top: 14px;
    opacity: 0.7;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);

    p {
      font-size: 14px;
    }
  }
`;

export const Con = styled.div`
  width: 19.8vw;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const Bg = styled.div`
  height: 285px;
  img {
    height: 100%;
    object-fit: cover;
  }

  @media screen and (max-width: 768px) {
    height: 251px;
    img {
      border-radius: 10px;
    }
  }
`;

export const PlaceTitle = styled.h3`
  font-size: 20px;
  margin-top: 10px;
  font-weight: 600;
`;
