//This page returns list of all cards.
//In this page, API handling is occured, which chosen by prop in each page
import { useState, useEffect, useMemo, useCallback } from 'react';

//for API
import { GetPages } from 'src/utils/api';
import DownButton from '../DownButton';

//import Card compo
import Card from './Cards';
import { AllListUl } from 'src/styles/compoStyles/cardlistStyle';

const AllCardsList = ({ category }) => {
	const [list, setList] = useState([]);
	const [bundleIdx, setBundleIdx] = useState(1);

	// Get Data using API (get Lists)
	const getData = async () => {
		const data = await GetPages(category, bundleIdx);
		setList((prev) => [...prev, ...data]);
	};

	// pagination
	// const getMoreList = () => {
	// 	setBundleIdx((prev) => prev + 1);
	// };

	const getMoreListMemo = useCallback(() => {
		return setBundleIdx((prev) => prev + 1);
	}, [bundleIdx]);

	useEffect(() => {
		getData();
	}, [bundleIdx]);

	return (
		<>
			<div>
				<AllListUl>
					{list &&
						list.map((data, idx) => {
							return <Card x={data} key={idx} />;
						})}
				</AllListUl>
				<DownButton getMoreList={getMoreListMemo} />
			</div>
		</>
	);
};

export default AllCardsList;
