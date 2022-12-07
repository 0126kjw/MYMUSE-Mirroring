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

const SearchBar = ({ keyword, setKeyword, searchRes, setSearchRes, setList }) => {
	const searchCategory = useRecoilValue(SearchCategoryState);
	const [modal, setModal] = useState('off');
	const [recList, setRecList] = useState([]);

	const realTimeSearch = async (keyword) => {
		console.log('searchCategory, keyword |', searchCategory, keyword);
		const data = await GetSearach(searchCategory, keyword);
		// console.log('data', data);
		setList(() => [...data]);
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

	// 인풋창 값 변경
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

	// 검색 (돋보기 클릭 or 엔터)
	const onClick = () => {
		showSearchResultsToLists();
	};
	const onSubmit = (e) => {
		e.preventDefault();
		showSearchResultsToLists();
	};
	const showSearchResultsToLists = () => {
		// 검색 키워드 띄우기
		setSearchRes(keyword);

		// 검색결과 목록 띄우기 +

		// 검색창 값 비우기
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
