import styled from '@emotion/styled';
import { UnderDevSection } from 'styles/pageStyles/underDev';

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
			<div className='guideText'>
				<p>지도에서 박물관 검색</p>
			</div>
			<div className='outerZido'>
				<UnderDevSection>
					<h1>개발중 입니다</h1>
				</UnderDevSection>
			</div>
		</ZidoSearchLayout>
	);
}
