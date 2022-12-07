import { useState, useEffect } from 'react';

//components
import DropDown from 'src/component/search/DropDown';
import RecommendedList from 'src/component/search/RecommendedList';

//for API
import API from 'src/utils/api';
const { GetSearach } = API();
// import axios from 'axios';

// state
import { useRecoilValue } from 'recoil';
import SearchCategoryState from 'src/state/searchCategory';

//style
import { SearchBarLayout } from 'src/styles/compoStyles/searchBarStyle';

const SearchBar = ({ keyword, setKeyword, searchRes, setSearchRes, setList, setOutputNeeded }) => {
	// 실시간 검색결과
	const [realTimelist, setRealTimeList] = useState([]);

	// 실시간 검색결과를 바탕으로 추천어 목록 생성
	const [recList, setRecList] = useState([]);

	// 검색 카테고리 (전역값)
	const searchCategory = useRecoilValue(SearchCategoryState);

	// 추천 검색어 모달 on/off
	const [modal, setModal] = useState('off');

	// 실시간 검색
	const realTimeSearch = async (keyword) => {
		const data = await GetSearach(searchCategory, keyword);
		setRealTimeList(() => [...data]);
		showRecommendeds(keyword, data);
	};

	const showRecommendeds = (keyword, data) => {
		// 추천 검색어 모달 띄우기
		if (keyword !== '') {
			setModal('on');
		} else {
			setModal('off');
		}
		// setRecList
		data.map((v, idx) => {
			setRecList((prev) => [...prev, v.title]);
			console.log('v.title', v.title);
		});
	};

	// 인풋 변경
	const onChange = (e) => {
		if (searchCategory == 'none') {
			alert('카테고리를 선택해주세요');
			return;
		}
		const keyword = e.target.value;
		setKeyword(keyword);
		if (keyword !== '') {
			realTimeSearch(keyword);
		}
	};
	// 검색 (돋보기 클릭)
	const onClick = () => {
		showSearchResultsToLists();
	};
	// 검색 (엔터 입력)
	const onSubmit = (e) => {
		e.preventDefault();
		showSearchResultsToLists();
	};
	const showSearchResultsToLists = async () => {
		// 키워드 띄우기
		setSearchRes(keyword);

		// 목록 띄우기
		setOutputNeeded(true);
		const data = await GetSearach(searchCategory, keyword);
		setList(() => [...data]);

		// 검색창 비우기
		setKeyword('');
	};

	return (
		<SearchBarLayout>
			<DropDown />
			<form onSubmit={onSubmit}>
				<input
					type='text'
					id='name'
					name='name'
					size='40'
					value={keyword}
					onChange={onChange}
					autoComplete='off'
				/>
				{modal == 'on' && <RecommendedList recList={recList} />}
			</form>
			<button onClick={onClick}>🔍</button>
		</SearchBarLayout>
	);
};

export default SearchBar;
