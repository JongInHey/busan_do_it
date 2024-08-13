import { useEffect, useState } from "react";
import {
  attractionAllList,
  festivalAllList,
  shoppingListAllList,
} from "../../../api";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { spacing } from "../../../GlobalStyle";
import { Loading } from "../../../components/Loading";
import { Autoplay } from "swiper/modules";

const Section = styled.section`
  padding: 100px 0 0 ${spacing.side};
  word-break: ${(props) => (props.$isbreak ? "normal" : "keep-all")};

  img {
    border-radius: 10px;
    object-fit: cover;
  }

  @media screen and (max-width: 1024px) {
    padding: 100px 0 0 ${spacing.taside};
  }

  @media screen and (max-width: 768px) {
    padding: 80px 0 0 ${spacing.moSide};
  }
`;

const RecoTitle = styled.h3`
  font-size: 28px;
  font-weight: 700;
  margin-top: 30px;
  margin-bottom: 40px;

  @media screen and (max-width: 768px) {
    font-size: 24px;
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
  height: 85px;
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

export const Recommand = ({ lang }) => {
  const [recoData, setRecoData] = useState();
  const [isbreak, setIsBreak] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const getRandomPlaces = (data, count) => {
    const shuffled = [...data].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  useEffect(() => {
    (async () => {
      try {
        const shopData = await shoppingListAllList(lang);
        const festiData = await festivalAllList(lang);
        const attrData = await attractionAllList(lang);

        const getShopData = shopData[`getShopping${lang}`];
        const getFestiData = festiData[`getFestival${lang}`];
        const getAttrData = attrData[`getAttraction${lang}`];

        const allData = [
          ...getShopData.item,
          ...getFestiData.item,
          ...getAttrData.item,
        ];

        const randomPlaces = getRandomPlaces(allData, 20);
        setRecoData(randomPlaces);

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
  }, [lang]);

  const params = {
    slidesPerView: 4.3,
    spaceBetween: 15,
    // loop: true,
    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
    },
    breakpoints: {
      320: {
        slidesPerView: 1.2,
        spaceBetween: 5,
        autoplay: {
          delay: 1500,
          disableOnInteraction: false,
        },
      },
      640: {
        slidesPerView: 2.3,
        spaceBetween: 10,
        autoplay: {
          delay: 1500,
          disableOnInteraction: false,
        },
      },
      1024: {
        slidesPerView: 4.3,
        spaceBetween: 15,
        autoplay: {
          delay: 1500,
          disableOnInteraction: false,
        },
      },
    },
  };
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {recoData && (
            <Section $isbreak={isbreak}>
              <RecoTitle>이런 곳은 어때요?</RecoTitle>
              <Swiper {...params} modules={[Autoplay]}>
                {recoData.map((data) => (
                  <SwiperSlide key={data.UC_SEQ}>
                    <Wrap>
                      <Link to={`/detail/${data.UC_SEQ}`}>
                        <img src={data.MAIN_IMG_THUMB} alt={data.TITLE} />
                      </Link>
                      <TitleBg>
                        <PlaceTitle>{data.TITLE}</PlaceTitle>
                      </TitleBg>
                    </Wrap>
                  </SwiperSlide>
                ))}
              </Swiper>
            </Section>
          )}
        </>
      )}
    </>
  );
};
