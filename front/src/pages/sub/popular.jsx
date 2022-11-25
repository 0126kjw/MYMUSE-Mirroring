//components
import PopularList from '../../component/PopularList';
//styling
import styled from '@emotion/styled';
import { UnderDevSection } from 'styles/pageStyles/underDev';

const PopularLayout = styled.div`
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

const PopularTitle = styled.div`
	padding: 30px;
	color: white;
`;

const Popular = () => {
	return (
		<PopularLayout>
			<PopularTitle />
			<UnderDevSection>
				<h1>개발중 입니다</h1>
			</UnderDevSection>
		</PopularLayout>
	);
};

export default Popular;
