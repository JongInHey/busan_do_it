import { useEffect, useState } from "react";
import { attractionList, festivalList, shoppingList } from "../../api";

export const Home = () => {
  const [shopData, setShopData] = useState();
  const [festiData, setFestiData] = useState();
  const [attractData, setAttractData] = useState();

  useEffect(() => {
    (async () => {
      try {
        const { getShoppingKr } = await shoppingList();
        const { getFestivalKr } = await festivalList();
        const { getAttractionKr } = await attractionList();

        setShopData(getShoppingKr.item);
        setFestiData(getFestivalKr.item);
        setAttractData(getAttractionKr.item);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  console.log(shopData);
  console.log(festiData);
  console.log(attractData);

  return <div>Home</div>;
};
