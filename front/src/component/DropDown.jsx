const { useState } = require('react');
//recoil
import { useSetRecoilState } from 'recoil';
import { searchSec } from 'src/state/searchCategory';
//styled
import { DropDownLabel, Optionlist, Option } from 'src/styles/dropDownStyle';

const DropDown = ({ list }) => {
	const [selected, setSelected] = useState('선택해주세요');
	const [active, setActive] = useState(true);
	const items = list;
	//serach section(category) setting
	const setSection = useSetRecoilState(searchSec);

	const translator = (data) => {
		let result = '';
		switch (data) {
			case '박물관':
				result = 'museum';
			case '전시회':
				result = 'exhibition';
			default:
				'none';
		}
		return result;
	};

	const selectfnc = () => {
		setActive((prv) => !prv);
		console.log('active?', active);
	};

	return (
		<>
			{list && (
				<>
					<DropDownLabel value={selected} onClick={selectfnc}>
						{active ? (
							<>{selected}</>
						) : (
							<>
								<Optionlist>
									{items.map((item, idx) => {
										return (
											<Option
												key={idx}
												onClick={() => {
													setSelected(item);
													setActive(false);
													setSection(translator(item));
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
