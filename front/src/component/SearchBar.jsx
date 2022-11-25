import styled from '@emotion/styled';
import cssUnit from 'lib/cssUnit';

const SearchBarLayout = styled.div`
	display: flex;
	justify-content: center;

	margin: 0px;
	padding: 30px;

	background-color: transparent;

	color: ${cssUnit.colors.White};
`;
const SearchBar = () => {
	return (
		<SearchBarLayout>
			<label htmlFor='name'> 검색 : &nbsp;</label>
			<input type='text' id='name' name='name' size='40' />
			<button>🔍</button>
		</SearchBarLayout>
	);
};

export default SearchBar;
