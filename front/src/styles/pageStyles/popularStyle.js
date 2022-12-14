import styled from '@emotion/styled';
import cssUnit from 'src/lib/cssUnit';

// Wrap title
export const PopWrapTitle = styled.h2`
	position: sticky;
	top: 0px;

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
`;
