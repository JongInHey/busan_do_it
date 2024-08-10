import { useEffect, useState } from "react";
import { Loading } from "../../components/Loading";
import { PageTitle } from "../../components/PageTitle";
import {
  attractionAllList,
  festivalAllList,
  shoppingListAllList,
} from "../../api";
import { useParams } from "react-router-dom";
import { useScrollTop } from "../../lib/useScrollTop";

export const Detail = ({ lang }) => {
  useScrollTop();
  const [shopData, setShopData] = useState();
  const [festiData, setFestiData] = useState();
  const [attractData, setAttractData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [isbreak, setIsBreak] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      try {
        const shopData = await shoppingListAllList(lang);
        const festiData = await festivalAllList(lang);
        const attrData = await attractionAllList(lang);

        const getShopData = shopData[`getShopping${lang}`];
        const getFestiData = festiData[`getFestival${lang}`];
        const getAttrData = attrData[`getAttraction${lang}`];

        setShopData(getShopData.item);
        setFestiData(getFestiData.item);
        setAttractData(getAttrData.item);

        if (lang === "Ja" || lang === "Zht") {
          setIsBreak(true);
        } else {
          setIsBreak(false);

          setIsLoading(false);
        }
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
          <PageTitle titleName={"상세페이지"} />
          <div>Detail</div>
        </>
      )}
    </>
  );
};
