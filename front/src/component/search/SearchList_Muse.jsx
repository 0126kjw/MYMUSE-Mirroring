import { useState, useEffect } from 'react';
// import Image from 'next/image';
import Card_Muse from 'src/component/search/Card_Muse';

const SearchList_Muse = ({ list }) => {
	return (
		<>
			<div>
				{list &&
					list.map((data, idx) => {
						return <Card_Muse x={data} key={idx} />;
					})}
			</div>
		</>
	);
};

export default SearchList_Muse;
