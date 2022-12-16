
**실행방법**

1. 깃랩 프로젝트 클론
2. env 파일 작성

```
# 카카오 맵
NEXT_PUBLIC_KAKAOMAP_APPKEY=''

# 카카오 공유
NEXT_PUBLIC_KAKAOSHARE_API_KEY=''

# Local_back (로컬 back서버에서 api) 
NEXT_PUBLIC_BASE_URL=""

# SEO의 ogUrl : 배포하는 사이트 base링크
NEXT_PUBLIC_OGURL_URL=''
```

- 개발버전 : npm run dev
- 상용빌드 : npm run build + npm run start
