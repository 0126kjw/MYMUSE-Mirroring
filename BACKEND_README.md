## 실행 방법

---

## 1. MongoDB 서버 구축

---

### a. local 서버

[참조문서](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-ubuntu/)를 따라 서버 구축

### b. Atlas 서버 ????

[Atlas](https://www.mongodb.com/atlas) 에 가입하여 무료 클러스터 생성

SECURITY 의 Database Access -> Add New User -> name, password 설정

SECURITY 의 Network Access -> Add IP Address -> current IP 등록

DEPLOYMENT Databases -> Connect -> Connect your application -> 서버 링크 복사

## 2. MongoDB 서버 url 환경변수에 등록

---

./.env 파일 수정

MONGODB_URL을 위에서 만든 mongodb 서버 링크로 설정

```bash
MONGODB_URL="mongodb://localhost:27017/myDB" (로컬 서버의 경우 예시)
MONGODB_URL="mongodb+srv://<name>:<password>@simple-board-cluster.2vbg4.mongodb.net/" (Atlas 서버의 경우)
```

> Atlas 서버의 경우, 자신이 설정했던 name, password로 수정
> 

### 3. 라이브러리 설치

---

npm install은 라이브러리 설치 커맨드로 package.json에 있는 라이브러리들을 설치

```bash
npm install or npm i
```

### 4. 이미지 호스팅?

---

```bash

```

### 5. Dialogflow key 실행

---

ai 쪽 readme로 연결해서 알려준다.??

Dialogflow key를 받아서 back폴더 안에 삽입 후 export 실행

```bash
export GOOGLE_APPLICATION_CREDENTIALS=<경로>/<파일명.json>
```

### 6. NestJS 실행

---

```bash
npm run start:debug
```

### 7. 파일 구조

---

back:.
└───src
└───modules
├───chatbots
│   ├───dto
│   ├───python
│   ├───scheduler
│   └───schemas
├───exhibitions
│   ├───crawling
│   ├───dto
│   ├───scheduler
│   └───schemas
├───map
│   ├───dto
│   └───schemas
├───museums
│   ├───dto
│   └───schemas
└───search
└───dto
