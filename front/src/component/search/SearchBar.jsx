// library
import { useState, useEffect, useRef } from 'react';
import { AiFillCaretDown } from 'react-icons/ai';

// components
import DropDown from 'src/component/search/DropDown';
import RecommendedList from 'src/component/search/RecommendedList';

// id book
import { IdBook } from 'src/data/idBook';

//for API
import { GetSearach } from 'src/utils/api';

// state
import { useRecoilValue } from 'recoil';
import { useRecoilState } from 'recoil';
import SearchCategoryState from 'src/state/searchCategory';
import SearchAgainState from 'src/state/searchAgain';

//style
import { SearchBarLayout } from 'src/styles/compoStyles/searchBarStyle';
import cssUnit from 'src/lib/cssUnit';
import { MobileButton } from 'src/styles/compoStyles/searchBarStyle';

const SearchBar = ({
	keyword,
	setKeyword,
	searchRes,
	setSearchRes,
	setList,
	setOutputNeeded,
	setSerchResNeeded,
	isFetching,
	setIsFetching,
}) => {
	// [id].jsx에서 뒤로가기로 돌아오면 재검색
	const [searchAgain, setSearchAgain] = useRecoilState(SearchAgainState);
	useEffect(() => {
		if (searchAgain.needed == true) {
			showSearchResultsToLists(searchAgain.lastWord);
		}
	}, [searchAgain]);

	// 드롭다운 모달처리
	const dropDownRef = useRef();
	const modalCloseHandler = ({ target }) => {
		if (catSelector && !dropDownRef.current.contains(target)) {
			setCatSelector('closed');
		}
	};
	useEffect(() => {
		window.addEventListener('click', modalCloseHandler);
		return () => {
			window.removeEventListener('click', modalCloseHandler);
		};
	});

	// 박물관/전시관 셀릭터 오픈
	const [catSelector, setCatSelector] = useState('closed');

	// 실시간 검색결과를 바탕으로 추천어 목록 생성
	const [recList, setRecList] = useState([]);

	// 검색 카테고리 (전역값)
	const searchCategory = useRecoilValue(SearchCategoryState);

	// 추천 검색어 모달 on/off
	const [modal, setModal] = useState('off');

	// 실시간 검색
	const realTimeSearch = async (keyword) => {
		if (keyword !== '') {
			// 추천검색어 생성
			let tempArr = [];
			IdBook.forEach((element) => {
				const Name = element.name;
				if (Name.includes(keyword)) {
					tempArr.push(element);
				}
			});
			setRecList([...tempArr]);
			if (recList.length > 0) {
				setModal('on');
			}
		} else {
			setModal('off');
		}
	};

	const onChange = (e) => {
		const keywordValue = e.target.value;
		setKeyword(keywordValue);
		if (keywordValue !== '') {
			realTimeSearch(keywordValue);
		} else {
			setModal('off');
		}
	};

	const onClick = () => {
		showSearchResultsToLists(keyword);
		setIsFetching(true);
		setModal('off');
	};

	const onSubmit = (e) => {
		e.preventDefault();
		showSearchResultsToLists(keyword);
		setIsFetching(true);
		setModal('off');
	};
	// 검색결과 띄우기
	const showSearchResultsToLists = async (keyword) => {
		// 검색한 키워드 띄우기
		setSearchRes(keyword);

		// 검색결과 띄우기
		setSerchResNeeded(true);
		setOutputNeeded(true);
		const data = await GetSearach(searchCategory, keyword);
		await setIsFetching(false);
		setList(() => [...data]);

		if (searchAgain.needed == false) {
			setKeyword('');
		}

		setSearchAgain({
			lastWord: keyword,
			needed: false,
		});
	};

	return (
		<SearchBarLayout>
			<div className='layout'>
				<div className='dropDonwLayout' ref={dropDownRef}>
					<DropDown
						setList={setList}
						setSerchResNeeded={setSerchResNeeded}
						catSelector={catSelector}
						setCatSelector={setCatSelector}
					/>
					{catSelector == 'closed' && (
						<AiFillCaretDown
							style={{
								position: 'absolute',
								marginTop: '3px',
								marginLeft: '100px',
								color: 'black',
								fontSize: '25px',
							}}
						/>
					)}
				</div>

				{/* <div ref={testRef}></div> */}

				<form onSubmit={onSubmit}>
					<div className={keyword ? 'inputDiv-typing' : 'inputDiv-nontyping'}>
						<input
							type='text'
							id='name'
							name='name'
							size='40'
							value={keyword}
							onChange={onChange}
							autoComplete='off'
							style={{
								outline: 'none',
								fontFamily: `${cssUnit.fontFamily.GothicAi}`,
								fontSize: '18px',
							}}
						/>
						<MobileButton onClick={onClick}>
							<div className='search'>
								<div className='s_circle'></div>
								<div className='s_rectangle'></div>
							</div>
						</MobileButton>
					</div>
					{modal == 'on' && (
						<RecommendedList
							recList={recList}
							showSearchResultsToLists={showSearchResultsToLists}
							setModal={setModal}
						/>
					)}
				</form>
				{/* <button >🔍</button> */}
			</div>
		</SearchBarLayout>
	);
};

export default SearchBar;
