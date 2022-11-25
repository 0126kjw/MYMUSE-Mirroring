import styled from '@emotion/styled';

const SearchBarLayout = styled.div`
	margin: 0px;
	padding: 50px;
	display: flex;
	justify-content: center;
	background-color: black;
	color: white;
`;
export default function SearchBar() {
	return (
		<SearchBarLayout>
			<label htmlFor='name'> 검색 : &nbsp;</label>
			<input type='text' id='name' name='name' size='10' />
			<button>🔍</button>
		</SearchBarLayout>
	);
}
