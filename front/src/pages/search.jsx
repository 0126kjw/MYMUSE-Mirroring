import { useState, useEffect } from 'react';

// components
import SearchBar from 'src/component/search/SearchBar';
import SearchList_Exhi from 'src/component/search/SearchList_Exhi';
import SearchList_Muse from 'src/component/search/SearchList_Muse';

// state
import { useRecoilState, useRecoilValue } from 'recoil';
import SelectedMapState from 'src/state/selectedMap';
import SearchCategoryState from 'src/state/searchCategory';

// style
import cssUnit from 'src/lib/cssUnit';
import { PageLayout } from 'src/styles/compoStyles/cardlistStyle';
import { ListSection } from 'src/styles/compoStyles/cardlistStyle';

//for page common section
import { Wrap, WrapTitle } from 'src/styles/common';
import TitleSection from 'src/component/common/TitleSection';
import { SearchSection } from 'src/styles/pageStyles/searchStyle';

// API
import API from 'src/utils/api';
const { GetSearach } = API();

// Seo
import SeoData from 'src/lib/seoData';
import Seo from 'src/component/Seo';

const Search = () => {
	//seo Data
	const PageData = SeoData.Search;

	// 지도 outer 상태로 지정
	const [selectedMapState, setSelectedMapState] = useRecoilState(SelectedMapState);
	useEffect(() => {
		setSelectedMapState({
			mapKind: 'outer',
			name: '',
		});
	}, []);

	// 검색했던 값
	const [searchRes, setSearchRes] = useState('');
	// 검색중인 값
	const [keyword, setKeyword] = useState('');
	// 검색 결과
	const [list, setList] = useState([]);
	// 검색결과 띄우기 첫 시점
	const [ouputNeeded, setOutputNeeded] = useState(false);
	const [serchResNeeded, setSerchResNeeded] = useState(false);
	// 카테고리
	const searchCategory = useRecoilValue(SearchCategoryState);

	return (
		<>
			<Seo title={PageData.title} description={PageData.description} ogUrl={PageData.ogUrl} />
			<PageLayout>
				<TitleSection color={cssUnit.backgroundColors.Black} size={50}>
					<Wrap>
						<WrapTitle color={cssUnit.colors.White}>박물관/전시관 검색</WrapTitle>
						{/* <DropDown /> */}
					</Wrap>
				</TitleSection>
				<SearchSection>
					<SearchBar
						keyword={keyword}
						setKeyword={setKeyword}
						searchRes={searchRes}
						setSearchRes={setSearchRes}
						setOutputNeeded={setOutputNeeded}
						setList={setList}
						setSerchResNeeded={setSerchResNeeded}
					/>
				</SearchSection>
				{serchResNeeded && <div> '{searchRes}' 검색결과</div>}

				<ListSection color={cssUnit.backgroundColors.White} size={900} className={`page`}>
					<Wrap>
						{ouputNeeded && searchCategory == '박물관' && (
							<SearchList_Muse list={list} />
						)}
					</Wrap>
					<Wrap>
						{ouputNeeded && searchCategory == '전시회' && (
							<SearchList_Exhi list={list} />
						)}
					</Wrap>
				</ListSection>
			</PageLayout>
		</>
	);
};

export default Search;
