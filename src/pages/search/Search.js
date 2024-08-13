import { useState } from "react";
import { PageTitle } from "../../components/PageTitle";
import {
  attractionAllList,
  festivalAllList,
  shoppingListAllList,
} from "../../api";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { spacing } from "../../GlobalStyle";

import { Recommand } from "./components/Recommand";
import { Result } from "./components/Result";
import { SearchForm } from "./components/SearchForm";
import { ErrorMessage } from "./components/ErrorMessage";
import { useScrollTop } from "../../lib/useScrollTop";

const Container = styled.section`
  padding: 150px ${spacing.side} 0;

  @media screen and (max-width: 1024px) {
    padding: 150px ${spacing.taside} 0;
  }

  @media screen and (max-width: 768px) {
    padding: 120px ${spacing.moSide} 0;
  }
`;

const ResultMessage = styled.h3`
  font-size: 20px;
  margin-top: 30px;
  font-weight: 600;

  @media screen and (max-width: 768px) {
    font-size: 18px;
    margin-top: 23px;
  }
`;

export const Search = ({ lang }) => {
  useScrollTop();
  const [searchData, setSearchData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [isbreak, setIsBreak] = useState(false);
  const [keyData, setKeyData] = useState();

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
      setKeyData(keyword);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const nullKeyword = watch("keyword");

  // console.log(searchData);
  // console.log(recoData);

  return (
    <>
      <Container $isbreak={isbreak}>
        <PageTitle titleName={"검색"} />
        <SearchForm
          register={register}
          handleSubmit={handleSubmit}
          onSearchResult={onSearchResult}
          errors={errors}
        />

        {nullKeyword && searchData?.length === 0 ? (
          <>
            <ErrorMessage message={"일치하는 검색 결과가 없습니다..!"} />
            <ErrorMessage
              message={`검색 장소 입력 후 엔터를 눌러주세요..!(●'◡'●)`}
            />
          </>
        ) : (
          <>
            {searchData && (
              <>
                <ResultMessage>
                  {"검색하신 " + keyData + "의 검색 결과 입니다!"}
                </ResultMessage>
                <Result isLoading={isLoading} searchData={searchData} />
              </>
            )}
          </>
        )}
      </Container>
      <Recommand lang={lang} />
    </>
  );
};
