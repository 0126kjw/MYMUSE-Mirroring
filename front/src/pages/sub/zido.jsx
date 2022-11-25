import SeoulZido from '../../component/seoulZido';
import styled from '@emotion/styled';
import Head from 'next/head';

const ZidoSearchLayout = styled.div`
	margin: 0px auto;
	main {
		text-align: center;
	}
	font-family: 'Noto serif KR', sans-serif;
	font-weight: bold;
	font-size: 25px;
	width: 1600px;
	background-color: black;

	.guideText {
		display: flex;
		justify-content: center;
		margin: 0px auto;
		padding-top: 50px;
		color: white;
	}
	.outerZido {
		display: flex;
		justify-content: center;
		margin: 0px auto;
		width: 90%;
		// height: 1000px;
		padding-top: 50px;
		padding-bottom: 50px;
		color: white;
	}
`;

export default function Zido() {
	return (
		<ZidoSearchLayout>
			<Head>
				<link
					rel='preconnect'
					href='https://fonts.googleapis.com'
				></link>
				<link
					rel='preconnect'
					href='https://fonts.gstatic.com'
					crossorigin
				></link>
				<link
					href='https://fonts.googleapis.com/css2?family=Noto+Serif+KR&display=swap'
					rel='stylesheet'
				></link>
			</Head>
			<div className='guideText'>
				<p>지도에서 박물관 검색</p>
			</div>
			<div className='outerZido'>
				<SeoulZido />
			</div>
		</ZidoSearchLayout>
	);
}
