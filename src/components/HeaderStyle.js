import styled, { keyframes } from "styled-components";
import { colors, spacing } from "../GlobalStyle";

export const Container = styled.header`
  width: 100%;
  padding: 20px ${spacing.side};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;

  background-color: rgba(0, 0, 0, 0.2);

  @media screen and (max-width: 1024px) {
    padding: 20px ${spacing.taside};
  }

  @media screen and (max-width: 768px) {
    padding: 20px ${spacing.moSide};
  }
`;

export const LOGO = styled.div`
  font-size: 30px;
  font-weight: 700;
  a {
    color: ${colors.point};
  }

  @media screen and (max-width: 768px) {
    font-size: 22px;
  }
`;

export const Menu = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 24px;

  li {
    width: 100%;
    height: 50px;
    padding: 0 10px;
    margin-bottom: 20px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 5px;
    background-color: rgba(0, 0, 0, 0.05);
    &:hover {
      background-color: ${colors.gradient};
      a {
        color: white;
      }
    }
  }

  a {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    letter-spacing: 0;

    svg {
      margin-right: 10px;
    }
  }

  @media screen and (max-width: 768px) {
    font-size: 18px;

    li {
      margin-bottom: 10px;
    }
  }
`;

export const SideMenu = styled.ul`
  position: absolute;
  right: 5%;
  bottom: 5%;
  width: 50%;

  li {
    width: 100%;
    height: 50px;
    border-radius: 5px;
    position: relative;
    background-color: rgba(0, 0, 0, 0.05);
    margin-right: 5%;
  }

  @media screen and (max-width: 768px) {
    right: 0;
    width: 100%;
  }
`;

export const Lang = styled.div`
  height: 100%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;

  svg {
    margin-right: 10px;
  }

  @media screen and (max-width: 768px) {
    font-size: 18px;
  }

  &:hover {
    background-color: ${colors.gradient};
    color: white;
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(-10px);
  }
`;

export const DropGnb = styled.div`
  width: 100%;
  position: absolute;
  bottom: 100%;
  left: 0;
  background-color: rgba(0, 0, 0, 0.05);
  border: 1px solid #ccc;
  border-radius: 5px;
  opacity: ${(props) => (props.$show ? "1" : "0")};
  animation: ${(props) => (props.$show ? fadeIn : fadeOut)} 0.3s ease-in-out;
  pointer-events: ${(props) => (props.$show ? "auto" : "none")};
  div {
    font-size: 18px;
    padding: 10px;
    cursor: pointer;
    text-align: center;

    &:hover {
      background-color: ${colors.gradient};
      color: #222;
    }
  }
`;
