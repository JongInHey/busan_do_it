import styled from "styled-components";

import { ImSearch } from "react-icons/im";
import { ErrorMessage } from "./ErrorMessage";

const Title = styled.h3`
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 20px;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
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

  @media screen and (max-width: 768px) {
    input {
      &::placeholder {
        font-size: 16px;
      }
      font-size: 16px;
    }
  }
`;

export const SearchForm = ({
  register,
  handleSubmit,
  onSearchResult,
  errors,
}) => {
  return (
    <>
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
        <ErrorMessage message={errors?.keyword?.message}></ErrorMessage>
      </Form>
    </>
  );
};
