import { useEffect, useState } from "react";
import { attractionList, festivalList, shoppingList } from "../../api";
import { PageTitle } from "../../components/PageTitle";
import { Loading } from "../../components/Loading";
import styled from "styled-components";
import { spacing } from "../../GlobalStyle";

import { Swiper, SwiperSlide } from "swiper/react";
import { Grid } from "swiper/modules";

import "swiper/css";
import "swiper/css/grid";

import { Link } from "react-router-dom";

const Container = styled.section`
  height: 80vh;
  margin-top: ${spacing.top};
  background: url(${(props) => props.$bgUrl}) no-repeat center / cover;
  position: relative;
`;

const WhiteBg = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 0.35) 0%,
    rgba(255, 255, 255, 0.37) 55%,
    rgba(255, 255, 255, 0.3) 100%
  );
`;

const ConWrap = styled.div`
  position: absolute;
  bottom: 7%;
  left: 5%;
  h3 {
    font-size: 70px;
    font-weight: 700;
    letter-spacing: -3px;
    margin-bottom: 30px;
    position: relative;
  }

  p {
    width: 700px;
    font-size: 20px;
    line-height: 30px;
    font-weight: 500;
  }
`;

const Section = styled.section`
  padding: 100px 0 0 ${spacing.side};

  img {
    border-radius: 10px;
    margin-top: 15px;
  }

  .swiper-wrapper {
    flex-direction: row;
  }
  .swiper-slide {
    margin-top: 0 !important;
  }
`;

const Title = styled.div`
  font-size: 26px;
  font-weight: 700;
  margin-bottom: 15px;
`;

const Wrap = styled.div`
  position: relative;
`;

const PlaceTitle = styled.h3`
  font-size: 18px;
  margin-top: 10px;
  font-weight: 500;
  text-align: center;
`;

const TitleBg = styled.div`
  width: 100%;
  height: 50px;
  background-color: rgba(0, 0, 0, 0.6);
  position: absolute;
  left: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  padding: 0 20px;
  border-radius: 15px;
  h3 {
    text-align: left;
    margin-top: 0;
    color: white;
  }
`;

export const Home = ({ lang }) => {
  const [shopData, setShopData] = useState();
  const [festiData, setFestiData] = useState();
  const [attractData, setAttractData] = useState();
  const [isLoading, setIsLoading] = useState(true);

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
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [lang]);

  // console.log(shopData);
  // console.log(festiData);
  console.log(attractData);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <PageTitle titleName={"Home"} />
          <Container $bgUrl={attractData[0].MAIN_IMG_NORMAL}>
            <WhiteBg />
            <ConWrap>
              <h3>{cleanTitle(attractData[0].MAIN_TITLE)}</h3>
              <p>{attractData[0].ITEMCNTNTS.slice(0, 200) + "..."}</p>
            </ConWrap>
          </Container>

          <Section>
            <Title>쇼핑의 모든 것, 부산</Title>
            <Swiper
              slidesPerView={5.4}
              grid={{
                rows: 2,
              }}
              spaceBetween={15}
              modules={[Grid]}
            >
              {shopData.map((data) => (
                <SwiperSlide key={data.UC_SEQ}>
                  <Link to={`/detail/${data.UC_SEQ}`}>
                    <img
                      src={data.MAIN_IMG_THUMB}
                      alt={cleanTitle(data.MAIN_TITLE)}
                    />
                    {data.MAIN_PLACE === "" && data.PLACE === "" ? (
                      <PlaceTitle>{data.TITLE}</PlaceTitle>
                    ) : data.MAIN_PLACE === "" ? (
                      <PlaceTitle>{data.PLACE}</PlaceTitle>
                    ) : (
                      <PlaceTitle>{data.MAIN_PLACE}</PlaceTitle>
                    )}
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </Section>

          <Section>
            <Title>부산 축제의 모든 것</Title>
            <Swiper slidesPerView={3.2} spaceBetween={15}>
              {festiData.map((data) => (
                <SwiperSlide key={data.UC_SEQ}>
                  <Wrap>
                    <Link to={`/detail/${data.UC_SEQ}`}>
                      <img
                        src={data.MAIN_IMG_THUMB}
                        alt={cleanTitle(data.MAIN_TITLE)}
                      />
                    </Link>
                    <TitleBg>
                      <PlaceTitle>{data.TITLE}</PlaceTitle>
                    </TitleBg>
                  </Wrap>
                </SwiperSlide>
              ))}
            </Swiper>
          </Section>

          <Section>
            <Title>부산 명소의 모든 것</Title>
            <Swiper
              slidesPerView={4.4}
              grid={{
                rows: 3,
              }}
              spaceBetween={15}
              modules={[Grid]}
            >
              {attractData.map((data) => (
                <SwiperSlide key={data.UC_SEQ}>
                  <Link to={`/detail/${data.UC_SEQ}`}>
                    <img
                      src={data.MAIN_IMG_THUMB}
                      alt={cleanTitle(data.MAIN_TITLE)}
                    />
                    <PlaceTitle>{data.PLACE}</PlaceTitle>
                    {data.SUBTITLE && <PlaceTitle>{data.SUBTITLE}</PlaceTitle>}
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </Section>
        </>
      )}
    </>
  );
};
