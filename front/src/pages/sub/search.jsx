//styled
import styled from '@emotion/styled';
import { UnderDevSection } from 'styles/pageStyles/underDev';
// components
import SearchBar from '../../component/SearchBar';

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

const Search = () => {
	return (
		<SearchpageLayout>
			<SearchBar />
			<UnderDevSection>
				<h1>개발중 입니다</h1>
			</UnderDevSection>
		</SearchpageLayout>
	);
};

export default Search;
