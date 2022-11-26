//styling
import styled from '@emotion/styled';
import cssUnit from 'lib/cssUnit';
//for page common section
import { Section, Wrap, WrapTitle } from 'styles/common';
import { UnderDevSection } from 'styles/compoStyles/underDev';
// components
import SearchBar from '../../component/SearchBar';

import { useRecoilState } from 'recoil';
import SelectedMapState from 'state/selectedMap';
import { useState, useEffect } from 'react';

const SearchpageLayout = styled.div`
	width: auto;
	height: auto;

	margin: 0px auto;

	background-color: ${cssUnit.colors.White};

	font-family: 'Noto serif KR', sans-serif;
	font-weight: bold;
	font-size: 25px;

	main {
		text-align: center;
	}
`;

const Search = () => {
	const [selectedMapState, setSelectedMapState] = useRecoilState(SelectedMapState);
	const [searchVal, setSearchVal] = useState('');
	const [searchRes, setSearchRes] = useState('');

	useEffect(() => {
		setSelectedMapState({
			mapKind: 'outer',
			name: '',
		});
	}, []);

	return (
		<SearchpageLayout>
			<Section color={cssUnit.backgroundColors.Black} size={50}>
				<Wrap>
					<WrapTitle color={cssUnit.colors.White}>박물관/전시관 검색</WrapTitle>
					<SearchBar
						searchVal={searchVal}
						setSearchVal={setSearchVal}
						searchRes={searchRes}
						setSearchRes={setSearchRes}
					/>
				</Wrap>
			</Section>

			<Section color={cssUnit.backgroundColors.White} size={900}>
				<Wrap>
					<UnderDevSection>
						<h1>개발중 입니다</h1>
						<h1>검색결과 : {searchRes} </h1>
					</UnderDevSection>
				</Wrap>
			</Section>
		</SearchpageLayout>
	);
};

export default Search;
