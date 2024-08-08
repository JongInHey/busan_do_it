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

  background-color: rgba(255, 255, 255, 0.2);
  li {
    &:hover {
      background-color: ${colors.gradient};
    }
  }
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
`;

export const Menu = styled.ul`
  width: 400px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;

  li {
    width: 30%;
    height: 100%;
    margin-right: 3.33%;
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 5px;
    background-color: ${colors.point};
  }

  a {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
  }

  @media screen and (max-width: 1024px) {
    width: 300px;
  }
`;

export const SideMenu = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;

  li {
    width: 100px;
    height: 30px;
    border-radius: 5px;
    position: relative;
    background-color: ${colors.point};
    margin-right: 5%;
  }

  a {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
  }

  @media screen and (max-width: 1024px) {
    li {
      width: 80px;
    }
  }
`;

export const Lang = styled.div`
  height: 100%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
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
  top: 100%;
  left: 0;
  background-color: ${colors.point};
  border: 1px solid #ccc;
  border-radius: 5px;
  opacity: ${(props) => (props.$show ? "1" : "0")};
  animation: ${(props) => (props.$show ? fadeIn : fadeOut)} 0.3s ease-in-out;
  pointer-events: ${(props) => (props.$show ? "auto" : "none")};
  div {
    padding: 10px;
    color: white;
    cursor: pointer;
    text-align: center;

    &:hover {
      background-color: #f0f0f0;
      color: #222;
    }
  }
`;
