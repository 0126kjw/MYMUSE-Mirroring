import styled from '@emotion/styled';
import cssUnit from 'lib/cssUnit';

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
	const onChange = (e) => {
		setSearchVal(e.target.value);
	};
	const onSubmit = (e) => {
		e.preventDefault();
		setSearchRes(searchVal);
		setSearchVal('');
	};
	const onClick = () => {
		setSearchRes(searchVal);
		setSearchVal('');
	};

	return (
		<SearchBarLayout>
			<form onSubmit={onSubmit}>
				<label htmlFor='name'> 검색 : &nbsp;</label>
				<input
					type='text'
					id='name'
					name='name'
					size='40'
					value={searchVal}
					onChange={onChange}
					autocomplete='off'
				/>
			</form>
			<button onClick={onClick}>🔍</button>
		</SearchBarLayout>
	);
};

export default SearchBar;
