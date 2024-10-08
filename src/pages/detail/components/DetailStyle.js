import styled from "styled-components";
import { colors, spacing } from "../../../GlobalStyle";

export const Container = styled.section`
  padding: 100px 20% 0;
  word-break: ${(props) => (props.$isbreak ? "normal" : "keep-all")};

  img {
    height: 500px;
    border-radius: 10px;
    margin-bottom: 20px;
    object-fit: cover;
  }

  @media screen and (max-width: 1024px) {
    padding: 100px ${spacing.taside} 0;
  }

  @media screen and (max-width: 768px) {
    padding: 100px ${spacing.moSide} 0;

    img {
      height: 300px;
    }
  }
`;

export const Wrap = styled.div`
  padding: 15px;
  border-radius: 10px;

  @media screen and (max-width: 768px) {
    padding: 0;
    box-shadow: none;
  }
`;

export const Title = styled.h2`
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 20px;

  @media screen and (max-width: 768px) {
    font-size: 24px;
    margin-bottom: 15px;
  }
`;

export const Subtitle = styled.h3`
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 10px;
  opacity: 0.7;

  @media screen and (max-width: 768px) {
    font-size: 15px;
  }
`;

export const Desc = styled.p`
  font-size: 18px;
  font-weight: 300;
  line-height: 24px;

  @media screen and (max-width: 768px) {
    font-size: 14px;
    line-height: 22px;
  }
`;

export const MoreButton = styled.button`
  all: unset;
  display: block;
  margin-top: 20px;
  padding: 15px 20px;
  font-size: 16px;
  font-weight: 600;
  border-radius: 30px;
  cursor: pointer;
  background: linear-gradient(135deg, ${colors.point}, ${colors.point});
  transition: all 0.3s ease;
  position: relative;
  z-index: 98;
  color: white;

  &:hover {
    transform: translateY(-2px);
  }

  @media screen and (max-width: 768px) {
    padding: 10px 15px;
    font-size: 14px;
  }
`;

export const InfoSection = styled.div`
  margin-top: 30px;
  padding-top: 40px;
  border-top: 1px solid #999;
`;

export const InfoRow = styled.div`
  font-size: 20px;
  font-weight: 300;
  margin-bottom: 20px;
  line-height: 30px;
  span {
    font-size: 20px;
    font-weight: 700;
    margin-right: 5px;
  }

  a {
    color: ${colors.point};
    font-weight: 500;

    &:hover {
      text-decoration: underline;
    }
  }

  @media screen and (max-width: 768px) {
    font-size: 16px;
    line-height: 25px;
    span {
      font-size: 16px;
    }
  }
`;
