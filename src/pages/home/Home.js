import { useEffect, useState } from "react";
import {
  attractionAllList,
  attractionList,
  festivalAllList,
  festivalList,
  shoppingList,
  shoppingListAllList,
} from "../../api";
import { PageTitle } from "../../components/PageTitle";
import { Loading } from "../../components/Loading";

import "swiper/css";
import "swiper/css/grid";

import { MainBanner } from "./components/MainBanner";
import { List } from "./components/List";
import { useScrollTop } from "../../lib/useScrollTop";

export const Home = ({ lang }) => {
  useScrollTop();
  const [shopData, setShopData] = useState();
  const [festiData, setFestiData] = useState();
  const [attractData, setAttractData] = useState();
  const [allData, setAllData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [randomIndex, setRandomIndex] = useState(0);
  const [isbreak, setIsBreak] = useState(false);

  const cleanTitle = (title) => {
    const index = title.indexOf("(");
    if (index !== -1) {
      return title.substring(0, index).trim();
    }
    return title;
  };

  useEffect(() => {
    (async () => {
      try {
        const shopData = await shoppingList(lang, 1);
        const festiData = await festivalList(lang, 1);
        const attrData = await attractionList(lang, 1);
        const allShopData = await shoppingListAllList(lang);
        const allFestiData = await festivalAllList(lang);
        const allAttrData = await attractionAllList(lang);

        const getShopData = shopData[`getShopping${lang}`];
        const getFestiData = festiData[`getFestival${lang}`];
        const getAttrData = attrData[`getAttraction${lang}`];

        const getAllShopData = allShopData[`getShopping${lang}`];
        const getAllFestiData = allFestiData[`getFestival${lang}`];
        const getAllAttrData = allAttrData[`getAttraction${lang}`];

        setShopData(getShopData.item);
        setFestiData(getFestiData.item);
        setAttractData(getAttrData.item);

        const allData = [
          ...getAllShopData.item,
          ...getAllFestiData.item,
          ...getAllAttrData.item,
        ];

        setAllData(allData);

        if (lang === "Ja" || lang === "Zht") {
          setIsBreak(true);
        } else {
          setIsBreak(false);
        }

        const randomIdx = Math.floor(Math.random() * allData.length);
        setRandomIndex(randomIdx);

        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [lang]);

  // console.log(shopData);
  // console.log(festiData);
  // console.log(attractData);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <PageTitle titleName={"Home"} />
          <MainBanner
            allData={allData}
            randomIndex={randomIndex}
            isbreak={isbreak}
          />
          <List
            shopData={shopData}
            festiData={festiData}
            attractData={attractData}
            onCleanTitle={cleanTitle}
            isbreak={isbreak}
          />
        </>
      )}
    </>
  );
};
