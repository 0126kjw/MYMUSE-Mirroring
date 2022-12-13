import Head from 'next/head';

const ogImageSrc =
	'https://res.cloudinary.com/dtq075vja/image/upload/v1669879703/9gle/ogImage_uki29n.png';
const Seo = ({ pagePath, pageTitle, pageDesc }) => {
	//console.log('pagePath', pagePath);
	let seoPath;
	let seoTitle;
	let seoDesc;
	let appName;
	//deatil에서 에러처리로 404로 보내는 경우
	if (pagePath === undefined && pageTitle === undefined && pageDesc === undefined) {
		seoPath = process.env.NEXT_PUBLIC_OGURL_URL;
		seoTitle = `MYMUSE Error`;
		seoDesc = '에러 페이지 입니다';
		appName = 'MYMUSE';
		//detail에 있는 페이지 or 모든 합법적인
	} else {
		seoPath = process.env.NEXT_PUBLIC_OGURL_URL + pagePath;
		seoTitle = pageTitle;
		seoDesc = pageDesc;
		appName = `MYMUSE ${pageTitle}`;
	}
	//console.log('SEO, ', seoPath, seoTitle, seoDesc);

	return (
		<Head>
			<meta name='viewport' content='width=device-width, initial-scale=1.0' />
			<link rel='canonical' href='http://www.mysite.com/article/article1.html' />
			<meta name='keywords' content='박물관, 전시관, 미술관' />
			<meta name='description' content={seoDesc} />

			<meta name='application-name' content={appName} />
			<meta name='msapplication-tooltip' content='MYMUSE' />
			<meta name='msapplication-starturl' content={seoPath} />

			{/* Open Graph (Naver & Kakao*/}
			<meta property='og:title' content={seoTitle} />
			<meta property='og:site_name' content='MYMUSE' />
			<meta property='og:description' content={pageDesc} />
			<meta property='og:url' content={seoPath} />
			<meta property='og:locale' content='en_US' />
			<meta property='og:locale' content='ko_KR' />
			<meta property='og:type' content='website' />
			<meta property='og:image' content={ogImageSrc} />
			<meta property='og:image:width' content='1200' />
			<meta property='og:image:height' content='600' />
			{/* OP: Twitter */}
			<meta name='twitter:card' content='summary' />
			<meta name='twitter:title' content={seoTitle} />
			<meta name='twitter:description' content={seoDesc} />
			<meta name='twitter:url' content={seoPath} />
			<meta name='twitter:image' content={ogImageSrc} />
		</Head>
	);
};

//url, image

export default Seo;
