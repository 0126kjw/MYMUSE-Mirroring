//recoil
import { useRecoilState } from 'recoil';
import SearchCategoryState from 'src/state/searchCategory';

//styled
import { DropDownLabel, Optionlist, Option } from 'src/styles/dropDownStyle';

const DropDown = ({ setList, setSerchResNeeded, catSelector, setCatSelector }) => {
	// const [selected, setSelected] = useState('선택해주세요');

	const [category, setCategory] = useRecoilState(SearchCategoryState);
	const catList = ['박물관', '전시회'];

	const CategorySelectorOnOff = (e) => {
		if (catSelector == 'opened') {
			setCatSelector('closed');
		}
		if (catSelector == 'closed') {
			setCatSelector('opened');
		}
	};

	const categorySelect = (item) => {
		if (item !== category) {
			setList([]);
			setSerchResNeeded(false);
		}
		setCategory(item);
	};

	return (
		<>
			{catList && (
				<>
					<DropDownLabel
						className='checking'
						value={category}
						onClick={CategorySelectorOnOff}
						style={{ cursor: 'pointer' }}
					>
						{catSelector == 'closed' && <>{category}</>}
						{catSelector == 'opened' && (
							<>
								<Optionlist>
									{catList.map((item, idx) => {
										return (
											<Option
												key={`option${idx}`}
												onClick={() => {
													categorySelect(item);
												}}
											>
												{item}
											</Option>
										);
									})}
								</Optionlist>
							</>
						)}
					</DropDownLabel>
				</>
			)}
		</>
	);
};

export default DropDown;
