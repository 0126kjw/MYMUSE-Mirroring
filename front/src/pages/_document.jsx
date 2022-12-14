import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
	render() {
		return (
			<Html lang='ko'>
				<Head>
					<meta httpEquiv='X-UA-Compatible' content='IE=edge' />
					<script
						defer
						src='https://t1.kakaocdn.net/kakao_js_sdk/2.0.1/kakao.min.js'
					></script>
					{/* web font by link */}
					<link rel='preconnect' href='https://fonts.googleapis.com' />
					<link rel='preconnect' href='https://fonts.gstatic.com' />
					{/* <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin /> */}
					<link
						href='https://fonts.googleapis.com/css2?family=Gothic+A1&family=Gowun+Batang&family=Hahmlet&family=Nanum+Myeongjo&family=Noto+Serif+KR:wght@300;600&display=swap'
						rel='stylesheet'
					/>
					{/* icons */}
					<link rel='shortcut icon' href='/favicon.ico' />
					<link rel='apple-touch-icon' sizes='57x57' href='/apple-icon-57x57.png' />
					<link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
					<link rel='manifest' href='/manifest.json' />
					<meta name='msapplication-TileColor' content='#ffffff' />
					<meta name='msapplication-TileImage' content='/ms-icon-144x144.png' />
					<meta name='theme-color' content='#ffffff' />
					{/* common meta */}
					<meta charSet='utf-8'></meta>

					<body>
						<Main />
						<NextScript />
					</body>
				</Head>
			</Html>
		);
	}
}

export default MyDocument;
