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
import { ViewDetail } from "./components/ViewDetail";

export const Detail = ({ lang }) => {
  useScrollTop();
  const [detailData, setDetailData] = useState();
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

        const allData = [
          ...getShopData.item,
          ...getFestiData.item,
          ...getAttrData.item,
        ];
        const findData = allData.find((item) => item.UC_SEQ === Number(id));
        setDetailData(findData);

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
  }, [lang, id]);
  // console.log(detailData);
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <PageTitle titleName={"상세페이지"} />
          {detailData ? (
            <ViewDetail detailData={detailData} isbreak={isbreak} />
          ) : (
            <p>데이터를 찾을 수 없습니다.</p>
          )}
        </>
      )}
    </>
  );
};
