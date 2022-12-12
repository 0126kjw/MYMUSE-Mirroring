import Head from 'next/head';
import withServersideProps from 'src/hocs/withServersideProps';

const ogImageSrc =
	'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/07da70fe-2c9b-4f57-931c-5fde28a98939/Frame_11_%281%29.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221130T175257Z&X-Amz-Expires=86400&X-Amz-Signature=d7eadc4094f7415aa9fda411fbd95bf7d7859cbffcbe730f4e9094917bb424a1&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22Frame%252011%2520%281%29.png%22&x-id=GetObject';

const Seo = ({ pagePath, pageTitle, pageDesc }) => {
	const appName = `MYMUSE ${pageTitle}`;
	const ogUrl = process.env.NEXT_PUBLIC_OGURL_URL + pagePath;
	return (
		<Head>
			<meta name='viewport' content='width=device-width, initial-scale=1.0' />
			<link rel='canonical' href='http://www.mysite.com/article/article1.html' />
			<meta name='keywords' content='박물관, 전시관, 미술관' />
			<meta name='description' content={pageDesc} />

			<meta name='application-name' content={appName} />
			<meta name='msapplication-tooltip' content='MYMUSE' />
			<meta name='msapplication-starturl' content={ogUrl} />

			{/* Open Graph (Naver & Kakao*/}
			<meta property='og:title' content={pageTitle} />
			<meta property='og:site_name' content='MYMUSE' />
			<meta property='og:description' content={pageDesc} />
			<meta property='og:url' content={ogUrl} />
			<meta property='og:locale' content='en_US' />
			<meta property='og:locale' content='ko_KR' />
			<meta property='og:type' content='website' />
			<meta property='og:image' content={ogImageSrc} />
			<meta property='og:image:width' content='1200' />
			<meta property='og:image:height' content='600' />
			{/* OP: Twitter */}
			<meta name='twitter:card' content='summary' />
			<meta name='twitter:title' content={pageTitle} />
			<meta name='twitter:description' content={pageDesc} />
			<meta name='twitter:url' content={ogUrl} />
			<meta name='twitter:image' content={ogImageSrc} />
		</Head>
	);
};

//url, image

export default Seo;
