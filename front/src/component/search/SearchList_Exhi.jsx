import { useState, useEffect } from 'react';
//style
import { AllListUl } from 'src/styles/compoStyles/cardlistStyle';
//import Compo
import Card from 'src/component/cards/Cards';
import DownButton from '../DownButton';

const SearchList_Exhi = ({ list }) => {
	useEffect(() => {
		console.log('list', list);
	}, []);

	return (
		<>
			<div>
				<AllListUl>
					{list &&
						list.map((data, idx) => {
							return <Card x={data} key={idx} />;
						})}
				</AllListUl>
			</div>
		</>
	);
};

export default SearchList_Exhi;
