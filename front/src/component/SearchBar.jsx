import styled from '@emotion/styled';
import cssUnit from 'lib/cssUnit';
import axios from 'axios';

const SearchBarLayout = styled.div`
	display: flex;
	justify-content: center;

	margin: 0px;
	padding: 30px;

	background-color: transparent;
	color: ${cssUnit.colors.White};

	button {
		margin-top: 10px;
		height: 26px;
		line-height: 26px;
	}
`;

const SearchBar = ({ searchVal, setSearchVal, searchRes, setSearchRes }) => {
	const getSearchRes = async (inputValue) => {
		try {
			setSearchRes(inputValue);
			const res = await axios.get(
				`https://qrcavwxubm.us16.qoddiapp.com/search?option=museum&keyword=${inputValue}`,
			);
			console.log(res);
		} catch {
			// alert('서치 실패');
		}
	};

	const onChange = (e) => {
		setSearchVal(e.target.value);
		getSearchRes(e.target.value);
	};

	return (
		<SearchBarLayout>
			{/* <form onSubmit={onSubmit}> */}
			<label htmlFor='name'> 검색 : &nbsp;</label>
			<input
				type='text'
				id='name'
				name='name'
				size='40'
				value={searchVal}
				onChange={onChange}
				autoComplete='off'
			/>
			{/* </form> */}
			{/* <button onClick={onClick}>🔍</button> */}
		</SearchBarLayout>
	);
};

export default SearchBar;
