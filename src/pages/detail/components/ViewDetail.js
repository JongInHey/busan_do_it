import { FaLocationArrow } from "react-icons/fa";
import {
  Container,
  Wrap,
  Title,
  Subtitle,
  Desc,
  InfoSection,
  InfoRow,
  MoreButton,
} from "./DetailStyle";
import { useState } from "react";

export const ViewDetail = ({ isbreak, detailData }) => {
  const [isMoreDesc, setIsMoreDesc] = useState(false);

  const handleToggle = () => {
    setIsMoreDesc(!isMoreDesc);
  };

  return (
    <Container $isbreak={isbreak}>
      <Wrap>
        <img src={detailData.MAIN_IMG_NORMAL} alt={detailData.TITLE} />
        <Subtitle>{detailData.SUBTITLE || detailData.TITLE}</Subtitle>
        <Title>{detailData.PLACE || detailData.TITLE}</Title>
        {detailData.UC_SEQ === 504 ||
        detailData.UC_SEQ === 505 ||
        detailData.UC_SEQ === 533 ||
        detailData.UC_SEQ === 1736 ? (
          <Desc>{detailData.MAIN_PLACE}</Desc>
        ) : (
          <>
            <Desc>
              {isMoreDesc
                ? detailData.ITEMCNTNTS
                : detailData.ITEMCNTNTS.slice(0, 150) + "..."}
            </Desc>
            <MoreButton onClick={handleToggle}>
              {isMoreDesc ? "간략히" : "더보기+"}
            </MoreButton>
          </>
        )}

        <InfoSection>
          {detailData.ADDR1 && (
            <InfoRow>
              <span>주소 : </span> {detailData.ADDR1}
            </InfoRow>
          )}

          {detailData.USAGE_DAY && (
            <InfoRow>
              <span>운영기간 : </span>
              {detailData.USAGE_DAY}
            </InfoRow>
          )}

          {detailData.USAGE_AMOUNT && (
            <InfoRow>
              <span>이용요금 : </span>
              {detailData.USAGE_AMOUNT}
            </InfoRow>
          )}

          {detailData.USAGE_DAY_WEEK_AND_TIME && (
            <InfoRow>
              <span>운영시간 : </span>
              {detailData.USAGE_DAY_WEEK_AND_TIME}
            </InfoRow>
          )}

          {detailData.HLDY_INFO && (
            <InfoRow>
              <span>휴무일 : </span> {detailData.HLDY_INFO}
            </InfoRow>
          )}

          {detailData.CNTCT_TEL && (
            <InfoRow>
              <span>전화번호 : </span> {detailData.CNTCT_TEL}
            </InfoRow>
          )}

          {detailData.HOMEPAGE_URL && (
            <InfoRow>
              <span>홈페이지 : </span>
              <a
                href={detailData.HOMEPAGE_URL}
                target="_blank"
                rel="noreferrer"
              >
                웹 사이트로 가기
                <FaLocationArrow />
              </a>
            </InfoRow>
          )}

          {detailData.TRFC_INFO && (
            <InfoRow>
              <span>교통정보 : </span> {detailData.TRFC_INFO}
            </InfoRow>
          )}

          {detailData.MIDDLE_SIZE_RM1 && (
            <InfoRow>
              <span>편의시설 : </span> {detailData.MIDDLE_SIZE_RM1}
            </InfoRow>
          )}
        </InfoSection>
      </Wrap>
    </Container>
  );
};
