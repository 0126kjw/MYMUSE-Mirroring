import Head from 'next/head';
import withServersideProps from 'src/hocs/withServersideProps';

const ogImageSrc =
	'https://res.cloudinary.com/dtq075vja/image/upload/v1669879703/9gle/ogImage_uki29n.png';

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
