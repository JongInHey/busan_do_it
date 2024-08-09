const fetch = require("node-fetch");

const baseUrl = "http://apis.data.go.kr/6260000/";

const ServiceKey =
  "XFeZDljdQ%2B0MIJLE7iNgkxicxcla%2BQl%2F9i8veOL79Bjk5RNoucEbjPVL1I2cTNjttfKeqsUgnEEpTx8n9lGLyQ%3D%3D";

const options = "&numOfRows=25&resultType=json";

const url = (urlName, pageNum) => {
  return (
    baseUrl + `${urlName}?ServiceKey=${ServiceKey}&pageNo=${pageNum}${options}`
  );
};

export const shoppingList = (lang, pageNum) =>
  fetch(url(`ShoppingService/getShopping${lang}`, pageNum)).then((res) =>
    res.json()
  );

export const festivalList = (lang, pageNum) =>
  fetch(url(`FestivalService/getFestival${lang}`, pageNum)).then((res) =>
    res.json()
  );

export const attractionList = (lang, pageNum) =>
  fetch(url(`AttractionService/getAttraction${lang}`, pageNum)).then((res) =>
    res.json()
  );
