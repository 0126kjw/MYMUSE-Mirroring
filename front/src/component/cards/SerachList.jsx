import { useState, useEffect } from 'react';
//style
import { AllListUl } from 'src/styles/compoStyles/cardlistStyle';
//import Compo
import Card from './Cards';
import DownButton from '../DownButton';

const SearchList = ({ list }) => {
	const [bundleIdx, setBundleIdx] = useState(1);
	//for pagination
	//console.log('outer bundleIdx', bundleIdx);
	const getMoreList = () => {
		setBundleIdx((prev) => prev + 1);
		//console.log('bundleIdx', bundleIdx);
	};
	// useEffect(() => {
	// 	getData();
	// }, [bundleIdx]);

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
