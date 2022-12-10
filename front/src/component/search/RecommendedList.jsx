import styled from '@emotion/styled';

import { useEffect } from 'react';
import { useRouter } from 'next/router';

export const RecommendedListStyle = styled.div`
	width: 250px;
	z-index: 2;
	background-color: white;
	color: black;
	position: relative;
	border-radius: 10px;
	padding: 3px;
	border: solid 1px black;
	ul {
		list-style: none;
		/* margin: 10px; */
		margin-top: 0px;
		/* margin-bottom: 10px; */
		padding: 0px;
	}
	li {
		list-style: none;
		margin: 10px;
		cursor: pointer;
		&:hover {
			color: red;
		}
	}

	@media screen and (max-width: 900px) {
		position: absolute;
		width: 35%;
		margin-top: 50px;
	}
`;

const RecommendedList = ({ recList, showSearchResultsToLists }) => {
	const router = useRouter();
	const onClick = (name, id) => {
		showSearchResultsToLists(name);

		// 바로 상세페이지로 이동할까도 싶습니다
		// router.push(`/detail/${id}`);
	};

	useEffect(() => {
		console.log('recList', recList);
	}, [recList]);

	return (
		<RecommendedListStyle>
			<ul>
				{recList &&
					recList.map((item, idx) => (
						<li onClick={() => onClick(item.name, item.id)} key={`${idx}`}>
							{item.name}
						</li>
					))}
			</ul>
		</RecommendedListStyle>
	);
};

export default RecommendedList;
