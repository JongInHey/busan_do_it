import { useEffect, useState } from "react";
import { PageTitle } from "../../components/PageTitle";
import { Link, useParams } from "react-router-dom";
import { attractionList, festivalList, shoppingList } from "../../api";
import { Loading } from "../../components/Loading";
import {
  Container,
  SCategory,
  Button,
  ConWrap,
  Con,
  Bg,
  PlaceTitle,
} from "./components/ListStyle";
import { useScrollTop } from "../../lib/useScrollTop";
import InfiniteScroll from "react-infinite-scroll-component";

export const PlaceList = ({ lang }) => {
  useScrollTop();
  const [datalist, setDataList] = useState();
  const [filterData, setFilterData] = useState();
  const [resultData, setResultData] = useState();
  const [title, setTitle] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [isbreak, setIsBreak] = useState(false);
  const { id: isSelect } = useParams();

  const cleanTitle = (title) => {
    const index = title.indexOf("(");
    return index !== -1 ? title.substring(0, index).trim() : title;
  };

  useEffect(() => {
    (async () => {
      try {
        let fetchData;
        if (isSelect === "0") {
          fetchData = await shoppingList(lang, 1);
          setTitle("쇼핑");
        } else if (isSelect === "1") {
          fetchData = await festivalList(lang, 1);
          setTitle("축제");
        } else if (isSelect === "2") {
          fetchData = await attractionList(lang, 1);
          setTitle("명소");
        }
        const dataKey =
          isSelect === "0"
            ? `getShopping${lang}`
            : isSelect === "1"
            ? `getFestival${lang}`
            : `getAttraction${lang}`;

        setDataList(fetchData[dataKey].item);
        setResultData(fetchData[dataKey]);
        setFilterData(fetchData[dataKey].item);
        setSelectedGenre(null);

        if (lang === "Ja" || lang === "Zht") {
          setIsBreak(true);
        } else {
          setIsBreak(false);
        }

        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [isSelect, lang]);

  const handleSelect = (genre) => {
    setSelectedGenre(genre);
    setFilterData(
      genre === null
        ? datalist
        : datalist.filter((item) => item.GUGUN_NM === genre)
    );
  };

  const uniqueGenre = datalist && [
    ...new Set(datalist.map((item) => item.GUGUN_NM)),
  ];

  const morePage = () =>
    resultData.pageNo < Math.ceil(resultData.totalCount / resultData.numOfRows);

  const isfetchData = async () => {
    try {
      if (morePage()) {
        let page = (resultData.pageNo += 1);
        let fetchData;

        if (isSelect === "0") {
          fetchData = await shoppingList(lang, page);
        } else if (isSelect === "1") {
          fetchData = await festivalList(lang, page);
        } else if (isSelect === "2") {
          fetchData = await attractionList(lang, page);
        }

        const dataKey =
          isSelect === "0"
            ? `getShopping${lang}`
            : isSelect === "1"
            ? `getFestival${lang}`
            : `getAttraction${lang}`;

        const addItems = fetchData[dataKey].item;
        setDataList(datalist.concat(addItems));

        console.log(fetchData);
        console.log(resultData);
        if (selectedGenre) {
          setFilterData(
            datalist
              .concat(addItems)
              .filter((item) => item.GUGUN_NM === selectedGenre)
          );
        } else {
          setFilterData(datalist.concat(addItems));
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <PageTitle titleName={"장소리스트"} />

          <InfiniteScroll
            dataLength={filterData.length}
            next={isfetchData}
            hasMore={morePage()}
            loader={<Loading />}
          >
            <Container $isbreak={isbreak}>
              <h2>
                날씨보다 더 핫한 부산의 <span>{title}</span> 스팟
              </h2>

              <SCategory>
                <Button
                  onClick={() => handleSelect(null)}
                  $isSelected={selectedGenre === null}
                >
                  All
                </Button>
                {uniqueGenre.map((genre) => (
                  <Button
                    key={genre}
                    onClick={() => handleSelect(genre)}
                    $isSelected={selectedGenre === genre}
                  >
                    #{genre}
                  </Button>
                ))}
              </SCategory>

              <ConWrap>
                {filterData.map((data) => (
                  <Con key={data.UC_SEQ}>
                    <Link to={`/detail/${data.UC_SEQ}`}>
                      <Bg>
                        <img
                          src={data.MAIN_IMG_THUMB}
                          alt={cleanTitle(data.MAIN_TITLE)}
                        />
                      </Bg>
                      {isSelect === "2" ? (
                        <PlaceTitle>{data.PLACE}</PlaceTitle>
                      ) : isSelect === "1" ? (
                        <PlaceTitle>{data.TITLE}</PlaceTitle>
                      ) : (
                        <>
                          {data.MAIN_PLACE === "" && data.PLACE === "" ? (
                            <PlaceTitle>{data.TITLE}</PlaceTitle>
                          ) : data.MAIN_PLACE === "" ? (
                            <PlaceTitle>{data.PLACE}</PlaceTitle>
                          ) : (
                            <PlaceTitle>{data.MAIN_PLACE}</PlaceTitle>
                          )}
                        </>
                      )}
                      <p>{data.ADDR1}</p>
                    </Link>
                  </Con>
                ))}
              </ConWrap>
            </Container>
          </InfiniteScroll>
        </>
      )}
    </>
  );
};
