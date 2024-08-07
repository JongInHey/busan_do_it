import { routes } from "../routes";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { Container, LOGO, Menu, SideMenu, Lang, DropGnb } from "./HeaderStyle";

export const Header = ({ onLangChange }) => {
  const [dropOpen, setDropOpen] = useState(false);
  const dropgnbRef = useRef();

  const toggleDropdown = () => {
    setDropOpen(!dropOpen);
  };

  const handleClickOut = (e) => {
    if (dropgnbRef.current && !dropgnbRef.current.contains(e.target)) {
      setDropOpen(false);
    }
  };
  const handleLangChange = (lang) => {
    onLangChange(lang);
    setDropOpen(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOut);
    return () => {
      document.removeEventListener("mousedown", handleClickOut);
    };
  }, [dropgnbRef]);

  return (
    <Container>
      <LOGO>
        <Link to={routes.home}>BUSAN_DO IT</Link>
      </LOGO>

      <Menu>
        <li>
          <Link to={"/placelists/0"}>쇼핑</Link>
        </li>
        <li>
          <Link to={"/placelists/1"}>축제</Link>
        </li>
        <li>
          <Link to={"/placelists/2"}>명소</Link>
        </li>
      </Menu>

      <SideMenu>
        <li>
          <Link to={routes.search}>검색</Link>
        </li>
        <li ref={dropgnbRef}>
          <Lang onClick={toggleDropdown}>언어</Lang>
          <DropGnb $show={dropOpen}>
            <div onClick={() => handleLangChange("Kr")}>한국어</div>
            <div onClick={() => handleLangChange("Zhs")}>중국어</div>
            <div onClick={() => handleLangChange("Ja")}>일본어</div>
            <div onClick={() => handleLangChange("En")}>영어</div>
          </DropGnb>
        </li>
      </SideMenu>
    </Container>
  );
};
