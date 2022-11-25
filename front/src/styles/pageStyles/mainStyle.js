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

export const Logosection = styled.section`
	width: 131px;
	height: 450px;
	top: 90px;
	z-index: 2;
	&:hover {
		cursor: pointer;
	}
`;

//section parts
export const SlideSection = styled.section`
	min-width: 1200px;
	height: 900px;
	background-color: ${cssUnit.backgroundColors.White};
`;

export const MapSection = styled.section`
	position: relative;
	min-width: 1200px;
	height: 900px;
	background-color: ${cssUnit.backgroundColors.Gray};
`;

export const AiSection = styled.section`
	min-width: 1200px;
	height: 900px;
	background-color: ${cssUnit.backgroundColors.LightBlack};
`;

//article parts

export const SilderPart = styled.article`
	margin: 0px auto;
	max-width: 950px;
	height: 100%;

	border: solid 1px;

	text-align: center;
`;

export const MapPart = styled.div`
	margin: 0px auto;
	position: relative;
	max-width: 950px;
	height: 100%;

	border: solid 1px;

	text-align: center;
`;
//div elements parts

export const SilderContainer = styled.div`
	margin: 0px auto;
	max-width: 750px;
	height: 400px;

	border: solid 1px;
`;

export const MapContainer = styled.div`
	margin: 0px auto;

	width: 600px;
	height: 50.5%;

	border: solid 1px;
`;

export const SectionTitle = styled.h2`
	font-size: ${cssUnit.fontSize.medium};
`;
