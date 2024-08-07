import { useEffect, useState } from "react";
import { attractionList, festivalList, shoppingList } from "../../api";
import { PageTitle } from "../../components/PageTitle";
import { Loading } from "../../components/Loading";

export const Home = () => {
  const [shopData, setShopData] = useState();
  const [festiData, setFestiData] = useState();
  const [attractData, setAttractData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const { getShoppingKr } = await shoppingList();
        const { getFestivalKr } = await festivalList();
        const { getAttractionKr } = await attractionList();

        setShopData(getShoppingKr.item);
        setFestiData(getFestivalKr.item);
        setAttractData(getAttractionKr.item);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  console.log(shopData);
  console.log(festiData);
  console.log(attractData);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <PageTitle titleName={"Home"} />
          <div>Home</div>
        </>
      )}
    </>
  );
};
