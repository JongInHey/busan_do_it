import { routes } from "../routes";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { Container, LOGO, Menu, SideMenu, Lang, DropGnb } from "./HeaderStyle";

export const Header = () => {
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

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOut);
    return () => {
      document.removeEventListener("mousedown", handleClickOut);
    };
  }, []);

  console.log(dropOpen);

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
            <Link to={routes.home}>한국어</Link>
            <Link to={routes.home}>중국어</Link>
            <Link to={routes.home}>일본어</Link>
            <Link to={routes.home}>영어</Link>
          </DropGnb>
        </li>
      </SideMenu>
    </Container>
  );
};
