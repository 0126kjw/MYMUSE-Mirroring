import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
	render() {
		return (
			<Html>
				<Head>
					<meta charSet='utf-8'></meta>
					{/* web font by link */}
					<link rel='preconnect' href='https://fonts.googleapis.com' />
					<link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
					<link
						href='https://fonts.googleapis.com/css2?family=Gothic+A1&family=Noto+Serif+KR:wght@300&display=swap'
						rel='stylesheet'
					/>
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
