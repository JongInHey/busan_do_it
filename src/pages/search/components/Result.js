import styled from "styled-components";
import { Loading } from "../../../components/Loading";
import { Link } from "react-router-dom";

const ConWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 50px;
  column-gap: 15px;
  margin-top: 50px;
  justify-items: center;

  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
    row-gap: 20px;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    row-gap: 35px;
  }
`;

const Con = styled.div`
  width: 19.8vw;
  line-height: 30px;

  h3 {
    font-size: 22px;
    font-weight: 700;
    margin-top: 10px;
  }

  span {
    font-weight: 500;
    opacity: 0.5;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    line-height: 28px;

    h3 {
      font-size: 20px;
    }

    span {
      font-size: 14px;
    }
  }
`;

const Bg = styled.div`
  height: 285px;
  img {
    height: 100%;
    object-fit: cover;
  }

  @media screen and (max-width: 1024px) {
    height: 265px;
  }

  @media screen and (max-width: 768px) {
    height: 251px;
    img {
      border-radius: 10px;
    }
  }
`;

export const Result = ({ isLoading, searchData }) => {
  const cleanTitle = (title) => {
    const index = title.indexOf("(");
    return index !== -1 ? title.substring(0, index).trim() : title;
  };

  return (
    <ConWrap>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {searchData.map((data) => (
            <Con key={data.UC_SEQ}>
              <Link to={`/detail/${data.UC_SEQ}`}>
                <Bg>
                  <img src={data.MAIN_IMG_THUMB} alt={data.TITLE} />
                </Bg>
                <h3>{cleanTitle(data.MAIN_TITLE)}</h3>
                <span>{data.ADDR1}</span>
              </Link>
            </Con>
          ))}
        </>
      )}
    </ConWrap>
  );
};
