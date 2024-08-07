import styled from "styled-components";
import { colors, spacing } from "../../../GlobalStyle";

export const Container = styled.div`
  padding: 150px ${spacing.side};

  h2 {
    font-size: 60px;
    font-weight: 700;
    text-align: center;
    margin-bottom: 50px;

    span {
      color: ${colors.point};
    }
  }
`;

export const SCategory = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 20px;
`;

export const Button = styled.button`
  all: unset;
  padding: 5px 15px 6px 15px;
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
`;

export const ConWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 30px;
  column-gap: 15px;

  p {
    font-size: 18px;
    margin-top: 10px;
  }
`;

export const Con = styled.div``;

export const Bg = styled.div`
  img {
    height: 100%;
    object-fit: cover;
  }
`;

export const PlaceTitle = styled.h3`
  font-size: 20px;
  margin-top: 10px;
  font-weight: 600;
`;
