const fetch = require("node-fetch");

const baseUrl = "http://apis.data.go.kr/6260000/";

const ServiceKey =
  "XFeZDljdQ%2B0MIJLE7iNgkxicxcla%2BQl%2F9i8veOL79Bjk5RNoucEbjPVL1I2cTNjttfKeqsUgnEEpTx8n9lGLyQ%3D%3D";

const options = "pageNo=1&numOfRows=40&resultType=json";

const url = (urlName) => {
  return baseUrl + `${urlName}?ServiceKey=${ServiceKey}&${options}`;
};

export const shoppingList = (lang) =>
  fetch(url(`ShoppingService/getShopping${lang}`)).then((res) => res.json());

export const festivalList = (lang) =>
  fetch(url(`FestivalService/getFestival${lang}`)).then((res) => res.json());

export const attractionList = (lang) =>
  fetch(url(`AttractionService/getAttraction${lang}`)).then((res) =>
    res.json()
  );
