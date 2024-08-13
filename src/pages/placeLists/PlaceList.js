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
        const addDataList = datalist.concat(addItems);
        setDataList(addDataList);

        if (selectedGenre) {
          setFilterData(
            addDataList.filter((item) => item.GUGUN_NM === selectedGenre)
          );
        } else {
          setFilterData(addDataList);
        }

        // 카테고리가 포함되어 있는지 확인
        const addgenre = addItems.some(
          (item) => item.GUGUN_NM === selectedGenre
        );

        if (addgenre) {
          if (selectedGenre) {
            setFilterData(
              addDataList.filter((item) => item.GUGUN_NM === selectedGenre)
            );
          } else {
            setFilterData(addDataList);
          }
        } else if (selectedGenre === null) {
          if (selectedGenre) {
            setFilterData(
              addDataList.filter((item) => item.GUGUN_NM === selectedGenre)
            );
          } else {
            setFilterData(addDataList);
          }
        } else {
          isfetchData();
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  // console.log(datalist);
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <PageTitle titleName={"장소리스트"} />

          <Container $isbreak={isbreak}>
            {isSelect === "0" ? (
              <h2>
                먹거리와 구경거리 가득! 부산 <span>{title}</span> 스팟
              </h2>
            ) : isSelect === "1" ? (
              <h2>
                부산과 함께 스트레스 날려버릴 <span>{title}</span> 정보
              </h2>
            ) : (
              <h2>
                날씨보다 더 핫한 부산의 <span>{title}</span> 스팟
              </h2>
            )}

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

            <InfiniteScroll
              dataLength={filterData.length}
              next={isfetchData}
              hasMore={morePage()}
              loader={<Loading />}
              style={{ overflow: "unset" }}
            >
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
                        <>
                          {data.PLACE === "" ? (
                            <PlaceTitle>{data.SUBTITLE}</PlaceTitle>
                          ) : (
                            <PlaceTitle>{data.PLACE}</PlaceTitle>
                          )}
                        </>
                      ) : isSelect === "1" ? (
                        <PlaceTitle>{data.TITLE}</PlaceTitle>
                      ) : (
                        <>
                          {data.MAIN_PLACE === "" && data.PLACE === "" ? (
                            <PlaceTitle>{data.TITLE}</PlaceTitle>
                          ) : data.MAIN_PLACE === "" ? (
                            <PlaceTitle>{data.PLACE}</PlaceTitle>
                          ) : data.UC_SEQ === 504 || data.UC_SEQ === 505 ? (
                            <PlaceTitle>
                              {data.MAIN_PLACE.slice(0, 20) + " ..."}
                            </PlaceTitle>
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
            </InfiniteScroll>
          </Container>
        </>
      )}
    </>
  );
};
