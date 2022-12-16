import { useState, useEffect } from 'react';

// components
import SearchBar from 'src/component/search/SearchBar';
import SearchList_Exhi from 'src/component/search/SearchList_Exhi';
import SearchList_Muse from 'src/component/search/SearchList_Muse';

// state
import { useRecoilState, useRecoilValue } from 'recoil';
import currentMapState from 'src/state/currentMap';
import SearchCategoryState from 'src/state/searchCategory';

// style
import cssUnit from 'src/lib/cssUnit';
import { SearchWrapTitle, SearchResultCard } from 'src/styles/pageStyles/searchStyle';
import { PageLayout } from 'src/styles/compoStyles/cardlistStyle';
import { ListSection } from 'src/styles/compoStyles/cardlistStyle';
import { SubTitle } from 'src/styles/compoStyles/cardlistStyle';

//for page common section
import { Section, Wrap, WrapTitle } from 'src/styles/common';
import TitleSection from 'src/component/common/TitleSection';
import { SearchSection } from 'src/styles/pageStyles/searchStyle';

// API
import { GetSearach } from 'src/utils/api';

// Seo
import withGetServerSideProps from 'src/hocs/withServersideProps';
import Loading from 'src/component/common/Loading';
import NotFoundResult from 'src/component/common/NotFoundResult';

const Search = () => {
	// 지도 outer 상태로 지정
	const [currentMap, setCurrentMap] = useRecoilState(currentMapState);
	useEffect(() => {
		setCurrentMap({
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
	const [isFetching, setIsFetching] = useState(false);
	// 카테고리
	const searchCategory = useRecoilValue(SearchCategoryState);

	const isListExist = list.length;

	return (
		<>
			<PageLayout>
				<TitleSection color={cssUnit.backgroundColors.Black} size={50}>
					<Wrap>
						<SearchWrapTitle color={cssUnit.colors.White}>
							<li>박물관/전시회 검색</li>
						</SearchWrapTitle>
						<SubTitle>박물관과 전시관 검색하기</SubTitle>
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
						isFetching={isFetching}
						setIsFetching={setIsFetching}
					/>
				</SearchSection>
				{/* 데이터가 로딩되고 있을 때 & 검색결과가 필요할 때 */}
				{isFetching && serchResNeeded && <Loading />}
				{/*  */}
				{!isFetching && (
					<>
						{!isFetching && serchResNeeded && (
							<div className='searchRes'>
								{' '}
								{searchRes === '' ? (
									<>
										전체 <span>{searchCategory}</span> 검색결과
									</>
								) : (
									<>
										<span>{searchRes}</span>검색결과
									</>
								)}
							</div>
						)}
						{/* 검색결과 로딩을 했는데 값이 없을 때 */}
						{isListExist === 0 && !isFetching && serchResNeeded && (
							<>
								{' '}
								<NotFoundResult />
							</>
						)}

						<ListSection
							color={cssUnit.backgroundColors.White}
							size={900}
							className={`page`}
						>
							{/* 카테고리 있을 때 */}
							{isListExist != 0 && (
								<>
									<Wrap>
										{ouputNeeded && searchCategory == '박물관' && (
											<SearchList_Muse list={list} />
										)}
										{ouputNeeded && searchCategory == '전시회' && (
											<SearchList_Exhi list={list} />
										)}
									</Wrap>
								</>
							)}
						</ListSection>
					</>
				)}
			</PageLayout>
		</>
	);
};

export default Search;

export const getServerSideProps = withGetServerSideProps(async (context) => {
	return {
		props: {},
	};
});
