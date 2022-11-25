import styled from '@emotion/styled';
import cssUnit from 'lib/cssUnit';

export const MainContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: auto !important;
	height: auto !important;

	/* max-width: 1200px;
	min-height: 3000px;

	padding-top: 550px; */

	background-color: beige;
`;

export const MainTitleContainer = styled.div`
	width: auto;
	height: auto;

	min-height: 250px;
	/* background-image: bgImgSrc; */
	background-color: ${cssUnit.backgroundColors.Black};
`;

export const Logosection = styled.div`
	width: 131px;
	height: 450px;
	top: 90px;
	z-index: 2;
	&:hover {
		cursor: pointer;
	}
`;
