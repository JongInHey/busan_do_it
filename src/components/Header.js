import { routes } from "../routes";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { Container, LOGO, Menu, SideMenu, Lang, DropGnb } from "./HeaderStyle";

export const Header = ({ onLangChange }) => {
  const [dropOpen, setDropOpen] = useState(false);
  const [selectLang, setSelectLang] = useState("한국어");
  const dropgnbRef = useRef();

  const toggleDropdown = () => {
    setDropOpen(!dropOpen);
  };

  const handleClickOut = (e) => {
    if (dropgnbRef.current && !dropgnbRef.current.contains(e.target)) {
      setDropOpen(false);
    }
  };
  const handleLangChange = (lang, langName) => {
    setSelectLang(langName);
    onLangChange(lang);
    setDropOpen(false);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
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
          <Lang onClick={toggleDropdown}>{selectLang}</Lang>
          <DropGnb $show={dropOpen}>
            <div onClick={() => handleLangChange("Kr", "한국어")}>한국어</div>
            <div onClick={() => handleLangChange("Zht", "繁體中文")}>
              繁體中文
            </div>
            <div onClick={() => handleLangChange("Ja", "日本語")}>日本語</div>
            <div onClick={() => handleLangChange("En", "English")}>English</div>
          </DropGnb>
        </li>
      </SideMenu>
    </Container>
  );
};
