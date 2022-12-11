import styled from '@emotion/styled';

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

const RecommendedList = ({ recList, showSearchResultsToLists, setModal }) => {
	// 추천검색어 클릭시 상세페이지가 아닌 검색창으로 이동 (우선)
	const onClick = (name) => {
		setModal('off');
		showSearchResultsToLists(name);
	};

	return (
		<RecommendedListStyle>
			<ul>
				{recList &&
					recList.map((item, idx) => (
						<li onClick={() => onClick(item.name)} key={`${idx}`}>
							{item.name}
						</li>
					))}
			</ul>
		</RecommendedListStyle>
	);
};

export default RecommendedList;
