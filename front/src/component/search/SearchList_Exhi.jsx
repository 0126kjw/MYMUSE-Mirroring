import { useState, useEffect } from 'react';
//style
import { AllListUl } from 'src/styles/compoStyles/cardlistStyle';
//import Compo
import Card from 'src/component/search/Card_Exhi';
import DownButton from '../DownButton';

const SearchList_Exhi = ({ list }) => {
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
