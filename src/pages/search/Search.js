import { useState } from "react";
import { PageTitle } from "../../components/PageTitle";
import {
  attractionAllList,
  festivalAllList,
  shoppingListAllList,
} from "../../api";
import { useForm } from "react-hook-form";
import { ImSearch } from "react-icons/im";
import styled from "styled-components";
import { colors } from "../../GlobalStyle";
import { Container } from "../placeLists/components/ListStyle";

const Title = styled.h3`
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 20px;
`;
const Form = styled.form`
  position: relative;

  input {
    all: unset;
    width: 100%;
    height: 50px;
    border-bottom: 1px solid #e5e5e5;
    box-sizing: border-box;
    &::placeholder {
      font-size: 20px;
      margin-left: 20px;
    }
    padding: 0 30px;
    font-size: 20px;
    letter-spacing: 0;
  }

  button {
    all: unset;
    position: absolute;
    top: 15px;
    left: 0;
    font-size: 20px;
    cursor: pointer;
    opacity: 0.5;
  }
`;

const ErrorMessage = styled.h3`
  font-size: 18px;
  margin-top: 20px;
  color: ${colors.point};

  @media screen and (max-width: 768px) {
    font-size: 14px;
    margin-top: 13px;
  }
`;

export const Search = ({ lang }) => {
  const [searchData, setSearchData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [isbreak, setIsBreak] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const onSearchResult = async (data) => {
    const { keyword } = data;
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
      const searchResult = allData.filter(
        (item) =>
          item.MAIN_TITLE.includes(keyword) || item.GUGUN_NM.includes(keyword)
      );
      setSearchData(searchResult);

      if (lang === "Ja" || lang === "Zht") {
        setIsBreak(true);
      } else {
        setIsBreak(false);
      }

      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const nullKeyword = watch("keyword");

  console.log(searchData);
  return (
    <Container $isbreak={isbreak}>
      <PageTitle titleName={"검색"} />
      <Title>어디로 가볼까요!?</Title>
      <Form onSubmit={handleSubmit(onSearchResult)}>
        <input
          {...register("keyword", {
            required: "찾고싶은 장소나 구/군 을 입력해주세요!(●'◡'●)",
          })}
          type="text"
          placeholder="Search for places"
        ></input>
        <button>
          <ImSearch />
        </button>
        <ErrorMessage>{errors?.keyword?.message}</ErrorMessage>
      </Form>

      {nullKeyword && searchData?.length === 0 ? (
        <>
          <ErrorMessage>{"일치하는 검색 결과가 없습니다..!"}</ErrorMessage>
          <ErrorMessage>
            {`검색 장소 입력 후 엔터를 눌러주세요..!(●'◡'●)`}
          </ErrorMessage>
        </>
      ) : (
        ""
      )}
    </Container>
  );
};
