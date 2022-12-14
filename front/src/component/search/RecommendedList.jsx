import styled from '@emotion/styled';
import cssUnit from 'src/lib/cssUnit';

export const RecommendedListStyle = styled.div`
	width: 300px;
	z-index: 20;
	background-color: white;
	color: ${cssUnit.colors.DeepBlack};
	position: relative;
	//border-radius: 10px;
	padding: 3px 0 0 0;
	border: solid 1px black;

	position: absolute;

	height: 300px;
	overflow-y: auto;

	//

	font-size: ${cssUnit.fontSize.normal};
	font-family: ${cssUnit.fontFamily.GothicAi};
	font-weight: 500;

	//top: 8px;

	ul {
		list-style: none;
		/* margin: 10px; */
		margin-top: 0px;
		/* margin-bottom: 10px; */
		padding: 0px;
	}
	li {
		list-style: none;
		//margin: 10px;
		padding: 10px;
		cursor: pointer;
		&:hover {
			color: ${cssUnit.colors.DeepBlack};
			background-color: ${cssUnit.colors.LightGray};
		}
		:nth-last-of-type(1) {
			padding-bottom: 0px;
		}
	}
	@media screen and (max-width: 900px) {
		position: absolute;
		width: 39.5%;
		//padding-right: 5px;
		//padding-left: 5px;
		//margin-top: 50px;
		//padding: 5px;
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
