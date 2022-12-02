//components
import DropDown from './DropDown';
//style
import { SearchBarLayout } from 'src/styles/compoStyles/searchBarStyle';

const SearchBar = ({ searchVal, setSearchVal, searchRes, setSearchRes }) => {
	const list = ['박물관', '전시회'];

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
			<DropDown list={list} />
			<form onSubmit={onSubmit}>
				{/* <label htmlFor='name'> 검색 : &nbsp;</label> */}

				<input
					type='text'
					id='name'
					name='name'
					size='40'
					value={searchVal}
					onChange={onChange}
					autoComplete='off'
				/>
			</form>
			<button onClick={onClick}>🔍</button>
		</SearchBarLayout>
	);
};

export default SearchBar;
