import { useState, useEffect } from 'react';
// import Image from 'next/image';
import Card_Muse from 'src/component/search/Card_Muse';
import styled from '@emotion/styled';

const SearchList_Muse_Layout = styled.div`
	width: 100%;
`;

const SearchList_Muse = ({ list }) => {
	return (
		<>
			<SearchList_Muse_Layout>
				{list &&
					list.map((data, idx) => {
						return <Card_Muse x={data} key={idx} />;
					})}
			</SearchList_Muse_Layout>
		</>
	);
};

export default SearchList_Muse;
