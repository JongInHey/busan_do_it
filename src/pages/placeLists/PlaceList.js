import { useEffect, useState } from "react";
import { PageTitle } from "../../components/PageTitle";
import { Link, useParams } from "react-router-dom";
import { attractionList, festivalList, shoppingList } from "../../api";
import { Loading } from "../../components/Loading";
import styled from "styled-components";
import { colors, spacing } from "../../GlobalStyle";

const Container = styled.div`
  padding: 150px ${spacing.side};

  h2 {
    font-size: 60px;
    font-weight: 700;
    text-align: center;
    margin-bottom: 50px;

    span {
      color: ${colors.point};
    }
  }
`;

const SCategory = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 20px;
`;

const Button = styled.button`
  all: unset;
  padding: 5px 15px 6px 15px;
  margin-right: 10px;
  margin-bottom: 5px;
  text-align: center;
  background-color: ${(props) =>
    props.$isSelected ? `${colors.point}` : "rgba(255, 255, 255, 0.2)"};
  border: ${(props) =>
    props.$isSelected ? 0 : "1px solid rgba(0, 0, 0, 0.2)"};
  border-radius: 30px;
  cursor: pointer;
  color: ${(props) => (props.$isSelected ? "white" : "rgba(0, 0, 0, 0.8)")};
`;

const ConWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 30px;
  column-gap: 15px;

  p {
    font-size: 18px;
    margin-top: 10px;
  }
`;

const Con = styled.div``;

const Bg = styled.div`
  img {
    height: 100%;
    object-fit: cover;
  }
`;

const PlaceTitle = styled.h3`
  font-size: 20px;
  margin-top: 10px;
  font-weight: 600;
`;

export const PlaceList = ({ lang }) => {
  const [datalist, setDataList] = useState();
  const [title, setTitle] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [filterData, setFilterData] = useState();
  const [selectedGenre, setSelectedGenre] = useState(null);
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

  console.log(datalist);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <PageTitle titleName={"장소리스트"} />
          <Container>
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
