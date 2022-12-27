# MYMUSE BACKEND

## 파일 구조

```
src
┣ modules
┃ ┣ chatbots
┃ ┃ ┣ dto
┃ ┃ ┣ scheduler
┃ ┃ ┗ schemas
┃ ┣ exhibitions
┃ ┃ ┣ crawling
┃ ┃ ┣ dto
┃ ┃ ┣ scheduler
┃ ┃ ┗ schemas
┃ ┣ map
┃ ┃ ┣ dto
┃ ┃ ┗ schemas
┃ ┣ museums
┃ ┃ ┣ dto
┃ ┃ ┗ schemas
┃ ┣ search
┃ ┃ ┗ dto
```

## 실행 방법

### 1. MongoDB 서버 구축

---

- Local
    
    [문서](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-ubuntu/)를 따라 서버 구축
    
- Atlas
    
    [Atlas](https://www.mongodb.com/atlas)에 가입하여 무료 클러스터 생성
    

### 2. Environment variable

---

./.env 파일 생성 후 MONGODB_URL 설정

```bash
MONGODB_URL="mongodb://localhost:27017/myDB" (로컬 서버의 경우 예시)
MONGODB_URL="mongodb+srv://<name>:<password>@simple-board-cluster.2vbg4.mongodb.net/" (Atlas 서버의 경우)
```

> Atlas 서버의 경우, 자신이 설정했던 name, password로 수정
> 

### 3. 라이브러리 설치

---

package.json에 있는 라이브러리들을 설치

```bash
npm install
# or
npm i
```

### 4. Dialogflow key 실행

---

Dialogflow key를 받아서 back폴더 안에 삽입 후 export 실행

```bash
export GOOGLE_APPLICATION_CREDENTIALS=<경로>/<파일명.json>
```

> 💡**중요** - **실행 시 학습된 DialogFlow 모델이 존재해야 합니다.**
>

### 5. NestJS 실행

---

```bash
npm run start:debug
```