import Ranking from '../../component/ranking';
//styling
import styled from '@emotion/styled';
import { UnderDevSection } from 'styles/pageStyles/underDev';

const RankLayout = styled.div`
	margin: 0px auto;
	main {
		text-align: center;
	}
	font-family: 'Noto serif KR', sans-serif;
	font-weight: bold;
	font-size: 25px;
	width: 1600px;
	background-color: black;
`;

export default function Rank() {
	return (
		<RankLayout>
			<Ranking />
			<UnderDevSection>
				<h1>개발중 입니다</h1>
			</UnderDevSection>
		</RankLayout>
	);
}
