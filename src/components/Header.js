import { routes } from "../routes";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { Container, LOGO, Menu, SideMenu, Lang, DropGnb } from "./HeaderStyle";
import styled from "styled-components";
import { colors, spacing } from "../GlobalStyle";
import { FaMapMarkerAlt, FaShopify, FaWindowClose } from "react-icons/fa";
import { GiFireworkRocket, GiHamburgerMenu } from "react-icons/gi";
import { MdSavedSearch } from "react-icons/md";
import { GrLanguage } from "react-icons/gr";
import { MENUIMG_URL } from "../constant/imgUrl";

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
  transition: 0.4s;
  width: 50%;
  height: 100%;
  background-color: white;
  z-index: 101;
  padding: 270px ${spacing.moSide} 0;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    padding: 160px 0;
    width: 82%;
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
  position: absolute;
  top: 1%;
  right: 2%;
  z-index: 102;
  cursor: pointer;
  font-size: 26px;
`;

const ProfileBg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 250px;
  width: 100%;
  background: url(${MENUIMG_URL}) no-repeat center / cover;

  @media screen and (max-width: 768px) {
    height: 150px;
  }
`;

export const Header = ({ onLangChange }) => {
  const [selectLang, setSelectLang] = useState("언어");
  const [dropOpen, setDropOpen] = useState(false);
  const [active, setActive] = useState("-100%");
  const [overlayActive, setOverlayActive] = useState("none");
  const [drawerOpen, setDrawerOpen] = useState(true);
  const dropgnbRef = useRef();
  const [isVisible, setIsVisible] = useState(false);

  const toggleDropdown = () => {
    setDropOpen(!dropOpen);
  };

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
    if (!drawerOpen) {
      setActive("0");
      setOverlayActive("block");
    } else if (drawerOpen) {
      setActive("-100%");
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
    setActive("-100%");
    setOverlayActive("none");
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOut);
    return () => {
      document.removeEventListener("mousedown", handleClickOut);
    };
  }, [dropgnbRef]);

  return (
    <Container $isVisible={isVisible}>
      <LOGO>
        <Link to={routes.home}>BUSAN_DO IT</Link>
      </LOGO>

      <div>
        <HamburgerIcon onClick={toggleDrawer}>
          <GiHamburgerMenu />
        </HamburgerIcon>
      </div>

      <>
        <DrawerOverlay onClick={toggleDrawer} $overlayActive={overlayActive} />
        <DrawerMenu $active={active}>
          <ProfileBg />
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
