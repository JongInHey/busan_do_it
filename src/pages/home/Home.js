import { useEffect, useState } from "react";
import { attractionList, festivalList, shoppingList } from "../../api";
import { PageTitle } from "../../components/PageTitle";
import { Loading } from "../../components/Loading";

import "swiper/css";
import "swiper/css/grid";

import { MainBanner } from "./components/MainBanner";
import { List } from "./components/List";

export const Home = ({ lang }) => {
  const [shopData, setShopData] = useState();
  const [festiData, setFestiData] = useState();
  const [attractData, setAttractData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [randomIndex, setRandomIndex] = useState(0);

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
        const shopData = await shoppingList(lang);
        const festiData = await festivalList(lang);
        const attrData = await attractionList(lang);

        const getShopData = shopData[`getShopping${lang}`];
        const getFestiData = festiData[`getFestival${lang}`];
        const getAttrData = attrData[`getAttraction${lang}`];

        setShopData(getShopData.item);
        setFestiData(getFestiData.item);
        setAttractData(getAttrData.item);

        const randomIdx = Math.floor(Math.random() * getAttrData.item.length);
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
          <MainBanner attractData={attractData} randomIndex={randomIndex} />
          <List
            shopData={shopData}
            festiData={festiData}
            attractData={attractData}
            onCleanTitle={cleanTitle}
          />
        </>
      )}
    </>
  );
};
