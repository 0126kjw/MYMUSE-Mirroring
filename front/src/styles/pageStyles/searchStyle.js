import styled from '@emotion/styled';
import cssUnit from 'src/lib/cssUnit';

export const SearchSection = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;

	width: 100%;
	height: 50px;

	padding-bottom: 50px;

	background-color: ${cssUnit.backgroundColors.DeepBlack};

	@media screen and (max-width: 900px) {
		padding-bottom: 100px;
	}
`;

//Wrap title
export const SearchWrapTitle = styled.h2`
	position: relative;
	width: 100%;

	list-style: none;

	padding-top: 10px;
	padding-bottom: 15px;

	margin: 0;

	color: ${cssUnit.colors.White};
	font-size: ${cssUnit.fontSize.medium};
	text-align: center;
	line-height: 50px;

	background-color: ${cssUnit.colors.DeepBlack};
	list-style: none;

	font-family: ${cssUnit.fontFamily.NotoKR};
	font-weight: 600;

	li {
		//position: relative;

		:after {
			content: '';
			display: block;
			position: absolute;

			width: 20vw;
			height: 0.5px;

			top: 75%;
			left: 40%;

			border-bottom: 5px solid ${cssUnit.colors.DarkGold};
		}
	}

	color: ${(props) => {
		return props.color ? props.color : cssUnit.colors.Black;
	}};

	@media screen and (max-width: 500px) {
		font-size: 18px;
		/* word-break: keep-all;
					text-overflow: ellipsis;
					overflow: hidden;

					display: -webkit-box;
					-webkit-line-clamp: 1;
					-webkit-box-orient: vertical; */
	}
`;
