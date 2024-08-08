import { IoChevronUpSharp } from "react-icons/io5";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { colors } from "../GlobalStyle";

const Btn = styled.button`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 5%;
  right: 2%;
  z-index: 98;
  background-color: ${colors.point};
  color: white;
  border: none;
  border-radius: 10px;

  cursor: pointer;
  font-size: 24px;
  opacity: ${(props) => (props.$visible ? 1 : 0)};
  pointer-events: ${(props) => (props.$visible ? "auto" : "none")};
  transition: 0.3s;

  &:hover {
    background-color: ${colors.gradient};
  }
`;

export const TopBtn = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
  }, []);

  const ScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <Btn $visible={isVisible} onClick={ScrollToTop}>
      <IoChevronUpSharp />
    </Btn>
  );
};
