const { useState } = require('react');
//recoil
import { useSetRecoilState } from 'recoil';
import SearchCategoryState from 'src/state/searchCategory';
//styled
import { DropDownLabel, Optionlist, Option } from 'src/styles/dropDownStyle';

const DropDown = () => {
	const [selected, setSelected] = useState('선택해주세요');
	const [catSelector, setCatSelector] = useState('closed');
	const catList = ['박물관', '전시회'];

	const setCategory = useSetRecoilState(SearchCategoryState);
	const translator = (target) => {
		if (target == '박물관') return 'museum';
		if (target == '전시회') return 'exhibition';
	};

	const CategorySelectorOnOff = (e) => {
		if (catSelector == 'opened') {
			setCatSelector('closed');
		}
		if (catSelector == 'closed') {
			setCatSelector('opened');
		}
	};

	const closeCategorySelector = (item) => {
		// 선택 옵션 셀렉창에 출력 (한글)
		setSelected(item);
		// 전역 상태 설정 (영어)
		setCategory(translator(item));
	};

	return (
		<>
			{catList && (
				<>
					<DropDownLabel value={selected} onClick={CategorySelectorOnOff}>
						{catSelector == 'closed' && <>{selected}</>}
						{catSelector == 'opened' && (
							<>
								<Optionlist>
									{catList.map((item, idx) => {
										return (
											<Option
												key={`option${idx}`}
												onClick={() => {
													closeCategorySelector(item);
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
