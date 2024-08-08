import { HashRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { Detail } from "./pages/detail/Detail";
import { PlaceList } from "./pages/placeLists/PlaceList";
import { Search } from "./pages/search/Search";
import { PageNotFound } from "./pages/PageNotFound";
import { routes } from "./routes";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { useState } from "react";
import { TopBtn } from "./components/Topbtn";

export const Router = () => {
  const [lang, setLang] = useState("Kr");

  const handleLangChange = (langChange) => {
    setLang(langChange);
  };
  return (
    <HashRouter>
      <Header onLangChange={handleLangChange} />
      <Routes>
        <Route path={routes.home} element={<Home lang={lang} />} />
        <Route path={routes.detail} element={<Detail />} />
        <Route path={routes.placelists} element={<PlaceList lang={lang} />} />
        <Route path={routes.search} element={<Search />} />
        <Route path={"/*"} element={<PageNotFound />} />
      </Routes>
      <TopBtn />
      <Footer />
    </HashRouter>
  );
};
