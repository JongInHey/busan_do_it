import { HashRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { Detail } from "./pages/detail/Detail";
import { PlaceList } from "./pages/placeLists/PlaceList";
import { Search } from "./pages/search/Search";
import { PageNotFound } from "./pages/PageNotFound";
import { routes } from "./routes";

export const Router = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.detail} element={<Detail />} />
        <Route path={routes.placelists} element={<PlaceList />} />
        <Route path={routes.search} element={<Search />} />
        <Route path={"/*"} element={<PageNotFound />} />
      </Routes>
    </HashRouter>
  );
};
