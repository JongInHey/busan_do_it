import { routes } from "../routes";

export const Header = () => {
  return (
    <Container>
      <LOGO>
        <Link to={routes.home}>MOVIE</Link>
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
      </SideMenu>
    </Container>
  );
};
