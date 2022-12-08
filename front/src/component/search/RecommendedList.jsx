import styled from '@emotion/styled';

export const RecommendedListStyle = styled.div`
	background-color: brown;
	position: relative;
	border-radius: 10px;
	ul {
		list-style: none;
		padding: 0px;
		margin: 10px;
		margin-top: 0px;
	}

	@media screen and (max-width: 900px) {
		position: absolute;
		width: 35%;
		margin-top: 50px;
	}
`;

const RecommendedList = ({ recList }) => {
	return (
		<ul>
			<RecommendedListStyle>
				{recList &&
					recList.map((items, idx) => {
						<li key={`${idx}`}>{items}</li>;
					})}
			</RecommendedListStyle>
		</ul>
	);
};

export default RecommendedList;
