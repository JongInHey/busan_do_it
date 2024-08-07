import { HashRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { Detail } from "./pages/detail/Detail";
import { PlaceList } from "./pages/placeLists/PlaceList";
import { Search } from "./pages/search/Search";
import { PageNotFound } from "./pages/PageNotFound";
import { routes } from "./routes";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

export const Router = () => {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.detail} element={<Detail />} />
        <Route path={routes.placelists} element={<PlaceList />} />
        <Route path={routes.search} element={<Search />} />
        <Route path={"/*"} element={<PageNotFound />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
};
