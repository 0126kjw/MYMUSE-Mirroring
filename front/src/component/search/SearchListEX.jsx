import { useState, useEffect } from 'react';
//style
import { AllListUl } from 'src/styles/compoStyles/cardlistStyle';
//import Compo
import Card from 'src/component/cards/Cards';
import DownButton from '../DownButton';

const SearchList = ({ list }) => {
	useEffect(() => {
		console.log('list', list);
	}, []);

	// const [bundleIdx, setBundleIdx] = useState(1);
	// const getMoreList = () => {
	// 	setBundleIdx((prev) => prev + 1);
	// };

	return (
		<>
			<div>
				<AllListUl>
					{list &&
						list.map((data, idx) => {
							return <Card x={data} key={idx} />;
						})}
				</AllListUl>
				{/* <DownButton getMoreList={getMoreList} /> */}
			</div>
		</>
	);
};

export default SearchList;
