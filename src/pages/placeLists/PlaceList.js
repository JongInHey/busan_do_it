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

export const PlaceList = ({ lang }) => {
  useScrollTop();
  const [datalist, setDataList] = useState();
  const [title, setTitle] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [filterData, setFilterData] = useState();
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [isbreak, setIsBreak] = useState(false);
  const { id: isSelect } = useParams();

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
        let fetchData;
        if (isSelect === "0") {
          fetchData = await shoppingList(lang);
          setTitle("쇼핑");
        } else if (isSelect === "1") {
          fetchData = await festivalList(lang);
          setTitle("축제");
        } else if (isSelect === "2") {
          fetchData = await attractionList(lang);
          setTitle("명소");
        }
        const dataKey =
          isSelect === "0"
            ? `getShopping${lang}`
            : isSelect === "1"
            ? `getFestival${lang}`
            : `getAttraction${lang}`;

        setDataList(fetchData[dataKey].item);
        setFilterData(fetchData[dataKey].item);
        if (lang === "Ja") {
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
    if (genre === null) {
      setFilterData(datalist);
    } else {
      setFilterData(datalist.filter((item) => item.GUGUN_NM === genre));
    }
  };

  const uniqueGenre = datalist && [
    ...new Set(datalist.map((item) => item.GUGUN_NM)),
  ];

  // console.log(datalist);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <PageTitle titleName={"장소리스트"} />
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
        </>
      )}
    </>
  );
};
