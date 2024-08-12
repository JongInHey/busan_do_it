import styled from "styled-components";
import { spacing } from "../../../GlobalStyle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid } from "swiper/modules";
import { Link } from "react-router-dom";
import { shop_params, festi_params, place_params } from "./ListParams";
import { MdOutlineAddCircleOutline } from "react-icons/md";

const Section = styled.section`
  padding: 100px 0 0 ${spacing.side};
  word-break: ${(props) => (props.$isbreak ? "normal" : "keep-all")};

  img {
    border-radius: 10px;
    object-fit: cover;
  }

  .swiper-wrapper {
    flex-direction: row;
  }
  .swiper-slide {
    margin-top: 40px !important;
  }

  span {
    display: block;
    margin-top: 10px;
    opacity: 0.6;
    line-height: 20px;
  }

  @media screen and (max-width: 768px) {
    padding: 80px 0 0 ${spacing.moSide};

    span {
      font-size: 12px;
      margin-top: 5px;
    }
  }
`;

const Title = styled.div`
  font-size: 26px;
  font-weight: 700;

  display: flex;
  align-items: center;

  a {
    display: flex;
    align-items: center;
    margin-left: 15px;
    font-size: 22px;
    opacity: 0.8;
  }
  @media screen and (max-width: 768px) {
    font-size: 23px;

    a {
      font-size: 18px;
    }
  }
`;

const Wrap = styled.div`
  position: relative;
`;

const PlaceTitle = styled.h3`
  font-size: 18px;
  margin-top: 10px;
  font-weight: 700;
  line-height: 22px;
  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

const TitleBg = styled.div`
  width: 100%;
  height: 100px;
  background-color: rgba(0, 0, 0, 0.6);
  position: absolute;
  left: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  padding: 0 20px;
  border-radius: 10px;
  border-top-right-radius: 0;
  border-top-left-radius: 0;
  h3 {
    text-align: left;
    margin-top: 0;
    color: white;
  }
`;

export const List = ({
  shopData,
  onCleanTitle,
  festiData,
  attractData,
  isbreak,
}) => {
  return (
    <>
      <Section $isbreak={isbreak}>
        <Title>
          쇼핑의 모든 것, 부산{" "}
          <Link to={"/placelists/0"}>
            더보기
            <MdOutlineAddCircleOutline />
          </Link>
        </Title>
        <Swiper {...shop_params} modules={[Grid]}>
          {shopData.map((data) => (
            <SwiperSlide key={data.UC_SEQ}>
              <Link to={`/detail/${data.UC_SEQ}`}>
                <img
                  src={data.MAIN_IMG_THUMB}
                  alt={onCleanTitle(data.MAIN_TITLE)}
                />
                {data.MAIN_PLACE === "" && data.PLACE === "" ? (
                  <PlaceTitle>{data.TITLE}</PlaceTitle>
                ) : data.MAIN_PLACE === "" ? (
                  <PlaceTitle>{data.PLACE}</PlaceTitle>
                ) : data.UC_SEQ === 504 || data.UC_SEQ === 505 ? (
                  <PlaceTitle>
                    {data.MAIN_PLACE.slice(0, 18) + " ..."}
                  </PlaceTitle>
                ) : (
                  <PlaceTitle>{data.MAIN_PLACE}</PlaceTitle>
                )}
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </Section>

      <Section $isbreak={isbreak}>
        <Title>
          부산 축제의 모든 것{" "}
          <Link to={"/placelists/1"}>
            더보기
            <MdOutlineAddCircleOutline />
          </Link>
        </Title>
        <Swiper {...festi_params}>
          {festiData.map((data) => (
            <SwiperSlide key={data.UC_SEQ}>
              <Wrap>
                <Link to={`/detail/${data.UC_SEQ}`}>
                  <img
                    src={data.MAIN_IMG_THUMB}
                    alt={onCleanTitle(data.MAIN_TITLE)}
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

      <Section $isbreak={isbreak}>
        <Title>
          부산의 핫한 장소{" "}
          <Link to={"/placelists/2"}>
            더보기
            <MdOutlineAddCircleOutline />
          </Link>
        </Title>
        <Swiper {...place_params} modules={[Grid]}>
          {attractData.map((data) => (
            <SwiperSlide key={data.UC_SEQ}>
              <Link to={`/detail/${data.UC_SEQ}`}>
                <img
                  src={data.MAIN_IMG_THUMB}
                  alt={onCleanTitle(data.MAIN_TITLE)}
                />
                <PlaceTitle>{data.PLACE}</PlaceTitle>
                {data.SUBTITLE && <span>{data.SUBTITLE}</span>}
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </Section>
    </>
  );
};
