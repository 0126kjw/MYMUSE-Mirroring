import { useState, useEffect } from 'react';
// components
import SearchBar from 'src/component/SearchBar';
import SearchList from 'src/component/cards/SerachList';

//recoils
import { useRecoilState, useRecoilValue } from 'recoil';
import SelectedMapState from 'src/state/selectedMap';
import { searchSec, searchKeyword } from 'src/state/searchCategory';
//styling
import cssUnit from 'src/lib/cssUnit';
import { PageLayout } from 'src/styles/compoStyles/cardlistStyle';
import { ListSection } from 'src/styles/compoStyles/cardlistStyle';
//for page common section
import { Wrap, WrapTitle } from 'src/styles/common';
import TitleSection from 'src/component/common/TitleSection';
import { SearchSection } from 'src/styles/pageStyles/searchStyle';
//for API
import API from 'src/utils/api';
const { GetSearach } = API();
//for Seo
import SeoData from 'src/lib/seoData';
import Seo from 'src/component/Seo';

//components where data fetching occured
import AllCardsList from 'src/component/cards/AllCardsList';

const Search = () => {
	//seo Data
	const PageData = SeoData.Search;
	// 검색어 입력 처리
	const [searchVal, setSearchVal] = useState('');
	const [searchRes, setSearchRes] = useState(null);
	// 검색결과
	const [list, setList] = useState([]);
	//category section
	const searchCategory = useRecoilValue(searchSec);
	console.log('SL(category', searchCategory);

	// 지도 관련 상태처리
	const [selectedMapState, setSelectedMapState] = useRecoilState(SelectedMapState);
	useEffect(() => {
		setSelectedMapState({
			mapKind: 'outer',
			name: '',
		});
	}, []);

	//console.log('searchVal?', searchVal);
	//console.log('searchRes?', searchRes);

	const getSearchData = async () => {
		const data = await GetSearach(searchCategory, searchRes);
		console.log('search: ', data);
		setList(() => [...data]);
	};

	useEffect(() => {
		if (searchRes !== null) {
			getSearchData();
		}
	}, [searchRes]);

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
						searchVal={searchVal}
						setSearchVal={setSearchVal}
						searchRes={searchRes}
						setSearchRes={setSearchRes}
					/>
				</SearchSection>

				<ListSection color={cssUnit.backgroundColors.White} size={900} className={`page`}>
					<Wrap>
						{list.length === 0 ? (
							<>
								<AllCardsList category={`exhibitions`} />
							</>
						) : (
							<>
								<SearchList list={list} />
							</>
						)}
					</Wrap>
				</ListSection>
			</PageLayout>
		</>
	);
};

export default Search;
