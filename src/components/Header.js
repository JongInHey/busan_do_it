import { routes } from "../routes";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { Container, LOGO, Menu, SideMenu, Lang, DropGnb } from "./HeaderStyle";
import styled from "styled-components";
import { colors } from "../GlobalStyle";
import { FaMapMarkerAlt, FaShopify, FaWindowClose } from "react-icons/fa";
import { GiFireworkRocket } from "react-icons/gi";
import { MdSavedSearch } from "react-icons/md";
import { GrLanguage } from "react-icons/gr";
import { RiMenuFold3Line2 } from "react-icons/ri";

const HamburgerIcon = styled.div`
  font-size: 30px;
  cursor: pointer;
  color: ${colors.point};
  font-weight: 700;

  @media screen and (max-width: 768px) {
    font-size: 22px;
  }
`;

const DrawerMenu = styled.div`
  position: fixed;
  top: 0;
  right: ${(props) => props.$active};
  transition: 0.3s;
  width: 50%;
  height: 100%;
  background-color: white;
  z-index: 101;
  padding: 20px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    padding: 20px 0;
  }
`;

const DrawerOverlay = styled.div`
  display: ${(props) => props.$overlayActive};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.65);
  z-index: 100;
`;

const CloseButton = styled.div`
  align-self: flex-end;
  cursor: pointer;
  font-size: 24px;
  margin-bottom: 20px;

  @media screen and (max-width: 768px) {
    margin-right: 15px;
  }
`;

export const Header = ({ onLangChange }) => {
  const [selectLang, setSelectLang] = useState("한국어");
  const [dropOpen, setDropOpen] = useState(false);
  const [active, setActive] = useState("-50%");
  const [overlayActive, setOverlayActive] = useState("none");
  const [drawerOpen, setDrawerOpen] = useState(true);
  const dropgnbRef = useRef();

  const toggleDropdown = () => {
    setDropOpen(!dropOpen);
  };

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
    if (!drawerOpen) {
      setActive("0");
      setOverlayActive("block");
    } else if (drawerOpen) {
      setActive("-50%");
      setOverlayActive("none");
    }
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
    setDrawerOpen(false);
    setActive("-50%");
    setOverlayActive("none");
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

      <div>
        <HamburgerIcon onClick={toggleDrawer}>
          <RiMenuFold3Line2 />
        </HamburgerIcon>
      </div>

      <>
        <DrawerOverlay onClick={toggleDrawer} $overlayActive={overlayActive} />
        <DrawerMenu $active={active}>
          <CloseButton onClick={toggleDrawer}>
            <FaWindowClose />
          </CloseButton>

          <Menu>
            <li>
              <Link to={"/placelists/0"} onClick={toggleDrawer}>
                <FaShopify /> Shopping
              </Link>
            </li>
            <li>
              <Link to={"/placelists/1"} onClick={toggleDrawer}>
                <GiFireworkRocket /> Festival
              </Link>
            </li>
            <li>
              <Link to={"/placelists/2"} onClick={toggleDrawer}>
                <FaMapMarkerAlt /> Hot Place
              </Link>
            </li>
            <li>
              <Link to={routes.search} onClick={toggleDrawer}>
                <MdSavedSearch /> Search
              </Link>
            </li>
          </Menu>

          <SideMenu>
            <li ref={dropgnbRef}>
              <Lang onClick={toggleDropdown}>
                <GrLanguage />
                {selectLang}
              </Lang>

              <DropGnb $show={dropOpen}>
                <div onClick={() => handleLangChange("Kr", "한국어")}>
                  한국어
                </div>
                <div onClick={() => handleLangChange("Zht", "繁體中文")}>
                  繁體中文
                </div>
                <div onClick={() => handleLangChange("Ja", "日本語")}>
                  日本語
                </div>
                <div onClick={() => handleLangChange("En", "English")}>
                  English
                </div>
              </DropGnb>
            </li>
          </SideMenu>
        </DrawerMenu>
      </>
    </Container>
  );
};
