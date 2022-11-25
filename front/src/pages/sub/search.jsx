//styled
import styled from '@emotion/styled';
import { UnderDevSection } from 'styles/pageStyles/underDev';
// components
import SearchBar from '../../component/SearchBar';

import { useRecoilState } from 'recoil';
import SelectedMapState from 'state/selectedMap';
import { useEffect } from 'react';

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
	const [selectedMapState, setSelectedMapState] =
		useRecoilState(SelectedMapState);
	useEffect(() => {
		setSelectedMapState({
			mapKind: 'outer',
			name: '',
		});
	}, []);

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
