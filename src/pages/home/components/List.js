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

  span {
    font-size: 30px;
    color: ${colors.point};
    font-weight: 700;
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

export const List = ({ shopData, onCleanTitle, festiData, attractData }) => {
  return (
    <>
      <Section>
        <Title>
          <span>쇼핑</span>의 모든 것, 부산
        </Title>
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
        <Title>
          부산 <span>축제</span>의 모든 것
        </Title>
        <Swiper slidesPerView={3.2} spaceBetween={15}>
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
        <Title>
          부산의 <span>핫한</span> 장소
        </Title>
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
