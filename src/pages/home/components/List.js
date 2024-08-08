import styled from "styled-components";
import { colors, spacing } from "../../../GlobalStyle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid } from "swiper/modules";
import { Link } from "react-router-dom";

const Section = styled.section`
  padding: 100px 0 0 ${spacing.side};

  img {
    border-radius: 10px;
    margin-top: 15px;
    object-fit: cover;
  }

  .swiper-wrapper {
    flex-direction: row;
  }
  .swiper-slide {
    margin-top: 0 !important;
  }

  @media screen and (max-width: 768px) {
    padding: 40px 0 0 ${spacing.moSide};
  }
`;

const Title = styled.div`
  font-size: 26px;
  font-weight: 600;
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

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
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

const shop_params = {
  slidesPerView: 5.4,
  spaceBetween: 15,
  grid: {
    rows: 2,
  },
  breakpoints: {
    320: {
      slidesPerView: 2.1,
      spaceBetween: 5,
      grid: {
        rows: 2,
      },
    },
    640: {
      slidesPerView: 3.2,
      spaceBetween: 5,
      grid: {
        rows: 2,
      },
    },
    768: {
      slidesPerView: 4.6,
      spaceBetween: 10,
      grid: {
        rows: 2,
      },
    },
    1024: {
      slidesPerView: 5.4,
      spaceBetween: 15,
      grid: {
        rows: 2,
      },
    },
  },
};

const festi_params = {
  slidesPerView: 3.2,
  spaceBetween: 15,
  breakpoints: {
    320: {
      slidesPerView: 1.2,
      spaceBetween: 5,
    },
    640: {
      slidesPerView: 2.3,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 3.2,
      spaceBetween: 15,
    },
  },
};

const place_params = {
  slidesPerView: 4.4,
  spaceBetween: 15,
  grid: {
    rows: 3,
  },
  breakpoints: {
    320: {
      slidesPerView: 2.1,
      spaceBetween: 5,
      grid: {
        rows: 3,
      },
    },
    640: {
      slidesPerView: 2.8,
      spaceBetween: 5,
      grid: {
        rows: 3,
      },
    },
    768: {
      slidesPerView: 3.7,
      spaceBetween: 10,
      grid: {
        rows: 3,
      },
    },
    1024: {
      slidesPerView: 4.4,
      spaceBetween: 15,
      grid: {
        rows: 3,
      },
    },
  },
};

export const List = ({ shopData, onCleanTitle, festiData, attractData }) => {
  return (
    <>
      <Section>
        <Title>쇼핑의 모든 것, 부산</Title>
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

      <Section>
        <Title>부산의 핫한 장소</Title>
        <Swiper {...place_params} modules={[Grid]}>
          {attractData.map((data) => (
            <SwiperSlide key={data.UC_SEQ}>
              <Link to={`/detail/${data.UC_SEQ}`}>
                <img
                  src={data.MAIN_IMG_THUMB}
                  alt={onCleanTitle(data.MAIN_TITLE)}
                />
                <PlaceTitle>{data.PLACE}</PlaceTitle>
                {data.SUBTITLE && <PlaceTitle>{data.SUBTITLE}</PlaceTitle>}
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </Section>
    </>
  );
};
