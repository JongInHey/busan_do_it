## 📝 Busan place Info app | 부산 정보 알림 앱

## 목적성

- 부산의 시장, 쇼핑, 축제, 명소 등 장소에 대한 정보를 한눈에 찾을 수 있습니다. 또한 대중교통 정보, 주소, 운영 시간 및 요금, 웹 사이트 등 편하게 보여주는 정보를 하나의 앱으로 찾아서 볼 수 있음. <br> 그 장소에 대한 줄거리 같은 상세 설명을 보여주며 그 장소나 축제에 대해 호기심이 생겼으면 합니다.

## Stack (사용된 기술)

- React
- html / css
- javaScript
- node.js
- node-fetch
- hook-form
- infinite-scroll
- swiper
- git
- github

## ⌛개발 기간

- 2024.08.07 ~ 2024.08.14

## 📃프로젝트 기획

### 기획

- 부산에 대한 장소를 검색을 하려고 하면 구/군 별 맛집, 명소 등 검색을 했어야 했고 그곳에 대한 교통편이나 시간, 요금, 편의시설들을 찾고자 할 때에 검색 한 위치에 대한 정보를 한번 더 검색을 해야 하는 불편함이 있었습니다.

- 그래서 사용자의 편의성을 개편하여 이 앱을 만들어보며 편의성 개선이나 새로운 UIUX의 가치 또는 새로운 정보를 얻고 싶었습니다.

* 또한 하나의 웹/앱으로 얻고자 하는 정보를 빠르고 쉽게 간편하게 보여줄 수 있다면 부산에 대한 관심이 조금 더 생길 것이라고 생각했습니다.

### 작업 계획표

|   날짜   | 내용                                                                                                                                                                                                                                                                                                            |
| :------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 24.08.07 | 래퍼런스 리서치 & api 리서치 및 UI 기획 & api 응답 메세지 확인                                                                                                                                                                                                                                                  |
| 24.08.08 | Router 설정 (Header, Home, detail, placeList, search, 404page)<br> 전체 페이지 컴포넌트 구성 / Header (LOGO, sideMenu - modal 구성 => 쇼핑, 축제, 명소, 검색, 언어 변경) & Footer UI & 반응형 구성 <br> Helmet 타이틀 구성 / GlobalStyled (reset, body... , 포인트 컬러, 사이드 간격) & 웹 폰트 설정 / api 설정 |
| 24.08.09 | api props 및 매개 변수 설정 (node-fetch 사용) <br> Loading 컴포넌트 구성 (react-spinners 사용) <br> Home - mainbanner, List (swiper 사용) UI & 반응형 구성 <br> Top ScrollEvent & TopBtn (scrollY > 300 일 때 보이는 버튼) 구성                                                                                 |
| 24.08.10 | PlaceList (각 api shopping, , festival, attraction List) UI & 반응형 구성 (`/placelists/:id`를 이용해 3페이지를 나눠서 api를 받아오게 구성) <br> 구/군 별 분류 카테고리 구성 (set 객체를 사용해 중복 제거 후 구/군 별 필터링 데이터 반환)<br> 무한 스크롤 이벤트 구성 (infinite-scroll-component 사용)          |
| 24.08.11 | Datail (상세 페이지 - 타이틀, 상세 내용 (버튼 - 더보기 / 간략히), 주소, 운영기간, 요금, 시간, 휴무, 전화번호, 홈페이지, 교통정보, 편의시설 등 내용 구성 ) UI & 반응형 구성                                                                                                                                      |
| 24.08.12 | Search (검색 - 장소 명 검색 & 구/군 별 검색 가능) <br> 검색 전 전체 데이터 중 랜덤 하게 섞은 후 정렬을 통해 20개의 장소 추천 (swiper / autoplay 사용) UI & 반응형 구성 <br> 404page UI & 반응형 구성 구성                                                                                                       |
| 24.08.13 | 디자인 수정 및 추가 / 코드 리팩토링 <br> 버그 및 오류, 기능 추가 및 변경이 있을 시 수정 후 업데이트                                                                                                                                                                                                             |
| 24.08.14 | 유지보수 및 배포 확인 & 기능 점검 및 console 오류 등 전체 점검                                                                                                                                                                                                                                                  |

## 프로젝트 소개

- BUSAN_DO IT (Busan_Place_Info App) - 부산 정보 알림 앱

- git Url - https://github.com/JongInHey/busan_do_it

- project url - https://jonginhey.github.io/busan_do_it/

* open api 사용
  - 사용한 api
  - shopping api url : https://www.data.go.kr/data/15063487/openapi.do
  - festival api url : https://www.data.go.kr/data/15063500/openapi.do
  - attraction api url : https://www.data.go.kr/data/15063481/openapi.do

<p>
  <img src="https://private-user-images.githubusercontent.com/91867836/365737204-c1bb0dcf-0608-4986-9efb-4eea3d361e7d.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjYwNzEwOTYsIm5iZiI6MTcyNjA3MDc5NiwicGF0aCI6Ii85MTg2NzgzNi8zNjU3MzcyMDQtYzFiYjBkY2YtMDYwOC00OTg2LTllZmItNGVlYTNkMzYxZTdkLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA5MTElMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwOTExVDE2MDYzNlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTE5NzI0NDZlZjE3ZDZlMjZiNDYxOGY0NTk4MzIwZjFkZGY1NTdlZTZjNjEyNzU0ZTliMjIxNjE4Y2E5YjJmYTEmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.zKimFC9NZlCUxTFDVBXFKa4IT6Hkk2ORVEcPUh3yXBY" alt="home" width="49%" />
<img src="https://private-user-images.githubusercontent.com/91867836/365737197-8ba9bcc2-bb29-410a-8e3e-da9828d91fcb.PNG?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjYwNzEwOTYsIm5iZiI6MTcyNjA3MDc5NiwicGF0aCI6Ii85MTg2NzgzNi8zNjU3MzcxOTctOGJhOWJjYzItYmIyOS00MTBhLThlM2UtZGE5ODI4ZDkxZmNiLlBORz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA5MTElMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwOTExVDE2MDYzNlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTgyNTc1ODgyYzY5YzMzNjYzOGJmMDkwNWI5YzQ5N2FhMzc5NGVmOTM4ZTI5NThmY2Y4ZTVhOTA1ZTRmNDFhZDQmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.3hfrccBi2nB3noui4AfOi7lrR893TZFn7-Dzjkjf3-4" alt="list" width="49%" />
<img src="https://private-user-images.githubusercontent.com/91867836/365737184-49580e3a-e8a3-4789-96bd-706ad011d694.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjYwNzEwOTYsIm5iZiI6MTcyNjA3MDc5NiwicGF0aCI6Ii85MTg2NzgzNi8zNjU3MzcxODQtNDk1ODBlM2EtZThhMy00Nzg5LTk2YmQtNzA2YWQwMTFkNjk0LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA5MTElMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwOTExVDE2MDYzNlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTA2NDFlMTcyNDJjNjI2MGYxMTE5NjI1ZDRjNzJhYTk0ZmYyMzczMGE1Mzk3ODJiODEyMzJjMGQzZjVjMzM0OTUmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.uxSOZ_PdivLFp_93cA3jDG1mAhRVHpCGMto_Sk4kpvs" alt="detail" width="49%" />
  <img src="https://private-user-images.githubusercontent.com/91867836/365737226-b81b4e03-18bc-4eba-b77c-43ada59baf04.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjYwNzEwOTYsIm5iZiI6MTcyNjA3MDc5NiwicGF0aCI6Ii85MTg2NzgzNi8zNjU3MzcyMjYtYjgxYjRlMDMtMThiYy00ZWJhLWI3N2MtNDNhZGE1OWJhZjA0LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA5MTElMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwOTExVDE2MDYzNlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTAxZTJlMTQxODE1MzVkZmEwYzQ3ZDAxNTk2MjA2Y2U2ODhiMjI3ZWQ0OTE2MjUxNTMwMzc2NjVmMzBkNGI0MWImWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.9WNsW2_taPGKx7Sjtj2uIlkow2litoieIoCVxn2kovQ" alt="search-01" width="49%" />
<img src="https://private-user-images.githubusercontent.com/91867836/365737230-a6a93949-5db7-4c50-ae92-073691526f65.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjYwNzEwOTYsIm5iZiI6MTcyNjA3MDc5NiwicGF0aCI6Ii85MTg2NzgzNi8zNjU3MzcyMzAtYTZhOTM5NDktNWRiNy00YzUwLWFlOTItMDczNjkxNTI2ZjY1LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA5MTElMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwOTExVDE2MDYzNlomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWQxMjdmMmYxY2MyM2I5YTZlZmNmY2IxN2Q5ZmMxNDNlZTA2NGIyNjRkZjcwM2I3ZWIwNDM5ZmNlOGI4YTVhODQmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.MF4S8Fdeuw7CELkjfnJpyFiPC2Iq0DVjylP5DjqRgtQ" alt="search-02" width="49%" />

</p>


1. 메인 페이지

   - 메인 베너에 전체 쇼핑, 축제, 명소들을 랜덤 한 인덱스 값으로 타이틀과 상세 설명 함께 보입니다.

   - 타이틀 별 더보기 클릭 시 해당 키워드 별 리스트를 보여주는 페이지로 이동.

   - 부산의 쇼핑, 축제, 명소 등 장소들의 리스트를 Swiper로 구성.

2. 각 PlaceList 페이지

   - 구/군 별 카테고리를 통한 필터링을 할 수 있습니다.

   - 쇼핑, 축제, 명소 키워드 별 전체 리스트를 무한 스크롤을 통해 장소 명과 주소를 볼 수 있습니다.

   - 클릭 시 상세 페이지로 넘어가게 됩니다.

3. 상세 페이지

   - 장소 사진, 장소 이름, 소제목, 상세 내용을 볼 수 있습니다.

   - 더보기 / 간략히 버튼을 누르면 전체 상세 내용을 볼 수 있습니다.

   - 주소, 이용 요금, 운영 시간, 휴무일, 전화번호, 홈페이지, 교통정보, 편의시설 등 다양한 정보를 볼 수 있습니다.

   - 웹 사이트가 있을 시에 그 장소에 대한 홈페이지로 이동이 가능합니다.

4. 검색 페이지

   - 검색 창에 장소 명 또는 구/군 명으로 검색 가능합니다.

   - 검색 데이터를 한눈에 찾고 보기 쉽게 장소 이미지, 이름, 주소들을 간략하게 볼 수 있습니다..

   - 또한 검색 전 추천하는 장소 20가지를 볼 수 있습니다.

5. 헤더 메뉴

   - 각 PlaceList 페이지로 이동이 가능합니다.

   - 검색 페이지로 이동이 가능합니다.

   - 언어 변경을 통해 한국어, 중국어(번체), 영어, 일본어 4가지 언어로 정보들을 확인할 수 있습니다.

## 프로젝트하면서 느낀 점

### 프로젝트 진행 중 어려웠던 부분

1. 다른 언어로 되어있는 api의 값을 api 설정을 통해 누른 버튼의 값을 받아와 api 요청을 하고 api 호출을 통해 데이터 가져와 모든 페이지에 적용을 시키는 것이 오류와 여러 시행착오를 겪으면서 어려움을 많이 겪었었습니다.

2. PlaceList 페이지에 카테고리 별 필터링을 통해 구/군 별 필터링을 하고 싶었습니다. 하지만 api 데이터의 구/군 데이터의 모든 값이 불러와지면서 중복된 값들이 출력이 되는 부분을 빠르게 해결하지 못해 어려움을 겪었습니다.

3. 무한 스크롤 사용 시 ALL 카테고리가 선택되어 있을 시에는 무한 스크롤이 작동을 하게 되었으나 카테고리 선택 후 스크롤을 사용 시 필터링이 되지 않고 모든 값이 나오게 된다거나 페이지에 값이 없으면 넘어가지지 않는 현상이 생겨 진행에 어려움을 겪었었습니다.

#### 겪은 어려움을 해결한 방법

1. 언어 변경인 lang의 상태를 'Router'에서 관리를 해야 모든 페이지에 전달을 할 수 있을 것이라 생각을 했고 Header 컴포넌트를 통해 언어를 변경할 수 있으니 헤더에서 언어 변경 시 모든 컴포넌트에 lang 값을 프롭스로 전달하여 이 lang 값을 바탕으로 API를 요청하여 구성하였습니다. 또한 의존성 배열에 추가하여 언어가 변경될 때마다 API를 호출하도록 하여 해결하게 되었습니다.

2. 구글링을 통해 new Set()이라는 내장 객체를 알게 되었으며, Set은 동일한 값을 한 번만 저장하고 삽입된 순서를 유지하는 객체라는 것을 이용하여 중복된 값을 제거하고, 고유한 값으로 구성된 Set객체를 새로운 배열로 변환하여 해결하였습니다.

3. 추가적으로 조건을 더 생성하였습니다. 호출된 api 데이터에 카테고리가 포함되어 있는지 확인 후 포함되어 있으면 데이터를 업데이트하고 필터링된 데이터를 호출하였고, 포함되어 있지 않다면 isfetchData를 재귀적으로 한번 더 호출을 하여 다음 페이지를 요청하여 해결했습니다. 또한 무한 루프 방지를 위해 최대 페이지 수에 대한 조건을 추가하였습니다.

### 프로젝트를 하면서 알게 된 내용

- `react-infinite-scroll-component`를 통한 무한 스크롤 방법.

* `concat`을 통한 기존 배열을 변경하지 않고, 두 개 이상의 배열을 병합 후 새 배열 반환하는 방법.

* `new Set`을 이용해 중복된 값 제거 후 배열로 변환하는 방법.

- `indexOf`와 `trim`을 사용하여 특정 값의 이후의 Text를 자르는 방법.

- `backdrop-filter` 요소 뒤 영역에 흐림, 색상 시프트 등 그래픽 효과 적용하는 새로운 css를 알게 됨.

- `sort`를 이용한 무작위 정렬 - 배열의 요소를 정렬하는 방법.

- `replace()`메서드 정규식을 통해 api의 리턴 받은 JSON 데이터 값에 불필요한 HTML 태그를 제거하는 방법을 알게 됨.
  <br> ex) `.replace(/<\/?[^>]+(>|$)/g, "");`

### 유용하거나 새로 알게 된 플러그인 & 라이브러리

- swiper - modules [grid, autoplay] (그리드 슬라이더 구성에 도움을 줌)

- react-infinite-scroll-component (무한 스크롤을 보다 쉽게 적용 가능)

* react-components & react-reset (css)

- react-router-dom(페이지 연결, 내비게이션을 효율적으로 관리 & 사용 가능)

* react-helmey-async (문서의 타이틀, 즉 제목 요소를 바꿔줌)

* react-icons (아이콘)

* react-spinners (로딩 컴포넌트 구성에 대한 시간 단축)

### 프로젝트를 진행하면서 반성 및 칭찬 사항

- **반성할 점**

  - api 설정을 해놓은 상태에서 언어 변경 프롭스를 추가해 호출 api의 값을 바꾸려고 하다 보니 api 설정을 다시 하고 값을 추출하고 확인하는 것 때문에 시간이 좀 걸렸습니다. 다음 프로젝트를 진행할 때에는 받아올 api에 url 설정을 넣어야 할 기능을 먼저 생각한 후에 컴포넌트를 구성 전에 미리 변경하여 시간을 단축시켜 볼 것입니다.

  - 디자인에 욕심을 내다보니 계속 하나씩 추가를 하게 되어 디자인이 난잡해지고 시선이 분산되면서 디자인이 망가지게 되어 수정해야 할 디자인이 많아지게 되었습니다. 그러다 보니 디자인 수정에 꽂히게 되어 디자인에 대해 계속 수정하려고 하는 경향이 있었습니다. 그러다 보니 미세한 디자인에 대해 빠르게 넘어가지 못했습니다.

    - 이 문제를 위해 앱을 보는 사용자의 입장에서 생각하여 디자인하기 <br> 타임박스 기법 (디자인에 대한 작업 시간 정해두기) <br> 사용자의 시선을 분산시키지 않고 집중을 이용하여 머무를 수 있는 디자인 미리 짜놓기 등 이런 방식을 통해 단점을 해결해 나갈 것입니다.

* **칭찬할 점**

  - 주어진 것에 끝까지 해보자는 마음가짐을 가지고 있습니다. <br> 하지만 프로젝트를 진행하면서 개인적인 일이 생겨 계획에 차질이 생겼지만, 저는 계획한 기간 안에 무조건 끝내야겠다며 이른 아침부터 또는 새벽 늦게까지 프로젝트 진행을 하여 정해놓은 기한보다 빨리 프로젝트를 완료할 수 있었습니다.

  - 저는 효과적으로 문제 해결하는 것을 중요하게 생각합니다. <br> 프로젝트 진행 중 생긴 오류 및 버그들에 대해 번역기, 검색, docoument, mdn web docs들을 충분히 활용을 하여 오류 및 진행이 더딘 문제 해결에 대해서 많은 시간을 사용하지 않고 빠르게 해결하였습니다.

## 앞으로의 개발 방향과 프로젝트 개선 방안

- **개발 방향**

  - 유용한 라이브러리를 활용하면 시간 단축이 많이 되어 여러 라이브러리를 적극적으로 사용

  - 다양하고 여러 가지의 api를 활용하여 기획해 개발해 볼 것.

  * props를 이용한 디자인이나 조건문을 사용할 때 조건의 값을 확인하고 어디에 어떻게 props를 주고받을 것인지 미리 생각해 볼 것

  * 진행이 너무 느려지거나 막힐 때에는 적절한 휴식 및 다른 기능 먼저 빠르게 해결할 것

  * 변수, 상수, 함수, props, 조건, 핸들러들의 이름들을 헷갈리지 않게 직관적인 용어나 보기 편한 단어들로 사용할 것

  * 디자인은 최대한 포인트를 줘야 할 곳은 확실하게 포인트를 주며 시선이 분산되지 않게 사용자의 시선을 집중시킬 것

  * Chakra UI를 통한 디자인도 해볼 것

* **개선 방안**
