// components
import SearchBar from '../../component/searchBar';
import { UnderDevSection } from 'styles/pageStyles/underDev';
import styled from '@emotion/styled';

const SearchpageLayout = styled.div`
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

export default function Search() {
	return (
		<SearchpageLayout>
			<SearchBar />
			<UnderDevSection>
				<h1>개발중 입니다</h1>
			</UnderDevSection>
		</SearchpageLayout>
	);
}
