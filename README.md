# MY MUSE


문화 활동을 좋아하는 사람들을 위해 박물관, 미술관, 전시관 등에 대한 정보를 알려주는 서비스

## 1. 개요


- 서비스명 : MY MUSE
- 개발 기간 : 2022.11.14 ~ 2022.12.16(5주)
- 주제 : 인공지능 웹 서비스 프로젝트
- 목표 : 서울 내 박물관 & 미술관 정보를 하나의 웹사이트에서 쉽게 접근할 수 있는 플랫폼
- api 문서 : [바로 가기](https://app.swaggerhub.com/apis-docs/0126kjw/MYMUSE-API/1.0)
- URL: [바로 가기](http://kdt-ai5-team09.elicecoding.com/)

## 2. 팀원 소개


| 이름 | 기능 구현 파트 |
| --- | --- |
| 윤시준 / 팀장 | Frontend |
| 권휘동 | Frontend |
| 이지원 | Frontend |
| 김진우 | Backend |
| 남궁연범 | Backend |
| 한혜진 | AI |

## 3. 서비스 설명


### 3-1. 기획 의도

---

- 문제 제기
    - 사회적 거리두기가 해제되며 다시 문화예술을 찾는 사람들이 급격하게 늘어났다.
        - 관련기사: **[거리두기 풀리자 관광·문화예술 관람 늘었다](http://www.digitaltoday.co.kr/news/articleView.html?idxno=461766)**
    - 전시 일정이나 개장 시간 등을 알아보기 위해서는 시설마다 각각 운영하는 웹 사이트에 방문해서 찾아야 하는 어려움이 있다.
- 해결했을 때의 기대 효과
    1. 누구나 쉽게 서울의 박물관 & 미술관 정보를 획득
    2. 챗봇을 통한 정보 제공 서비스를 통해 더욱 편리하게 문화예술 정보를 파악

### 3-2. 주요 기능

---

- AI 챗봇
    - 박물관과 전시회에 대한 자연어 안내 기능
- 지도
    - 서울 내 박물관 지도 탐색 기능
- 검색
    - 박물관과 전시회 검색 기능

### 3-3. 서브 기능

---

- 반응형 웹
- 최근 본 페이지 목록
- SNS 공유 기능 (카카오톡, Twitter, Facebook)
- 카카오맵을 통한 위치 정보 제공

### 3-4. 프로젝트 구성

---

- 와이어프레임
    - [완성본](https://www.figma.com/file/xUpYp3ZPgtP6ADakcWJHIz/%EB%AC%B8%ED%99%94%EC%98%88%EC%88%A0-%EA%B4%80%EA%B4%91-%ED%94%8C%EB%9E%AB%ED%8F%BC?node-id=0%3A1)
    - [초안](https://www.figma.com/file/f6jBN0vKnA24rsIQpCDbAr/9gle?node-id=0%3A1&t=I6kS7uY0JdM56gkA-0)
- 사이트맵
    <br />
    <img src="/uploads/55899764e430464ac87d9af59934ccfa/9gle.drawio.png" width="619.5" height="504">
    

## 4. 기술

### 4-1. 기술 스택

---

- 💻 Frontend
    - 기본
        - `emotion.js` : CSS 작성
        - `NextJS`: REACT 프레임워크
        - `Recoil` : 상태관리
        - `Axios` : 서버 통신
    - 기능
        - `React-Simple-Maps` : 서울 커스텀 지도
        - `react tool tip` : 서울 커스텀 지도
        - `uuid` : 리코일 key값 처리
        - `react-kakao-maps-sdk` : 개별 박물관 지도
- 💾 Backend
    - `TypeScript` : 언어
    - `NestJS` : 프레임워크
    - `Swagger` : API Documentaion
    - `MongoDB Atlas`: 데이터베이스
    - `Cloudinary`: 이미지 호스팅
- 🤖 AI
    - `Flask`
    - `pandas`
    - `matplotlib`
    - `numpy`
    - `TensorFlow/keras`
    - `Dialogflow`
- 🔗 etc
    - `Prettier`
    - `eslint`
    - `Figma`
    - `Gitlab`
    - `Notion`
    - `Whimsical`

### 4-2. 인공지능 모델링

---

[인공지능 모델 설명](https://www.notion.so/ca02ab995123491fbeee783c19f15655)

