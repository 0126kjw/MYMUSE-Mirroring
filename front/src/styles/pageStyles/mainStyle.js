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

//silder
export const SlideSection = styled.section`
	margin: 0;
	min-width: 1200px;
	height: 850px;
	background-color: ${cssUnit.backgroundColors.White};
`;

export const SilderWrap = styled.article`
	margin: 0px auto;
	max-width: 950px;
	height: 100%;

	text-align: center;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export const SectionTitle = styled.h2`
	font-size: ${cssUnit.fontSize.medium};
`;

export const SilderContainer = styled.div`
	margin: 0;
	padding: 0px;
	width: 900px;
	max-width: 850px;
	height: 600px;
`;

export const MapSection = styled.section`
	position: relative;
	min-width: 1200px;
	height: 900px;
	background-color: ${cssUnit.backgroundColors.Gray};
`;

export const MapWrap = styled.article`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	margin: 0px auto;

	max-width: 950px;
	height: 100%;

	text-align: center;
`;

export const MapContainer = styled.div`
	margin: 0 auto;
	padding: 0px;

	width: 600px;
	max-width: 850px;
	height: 50.5%;
`;

export const AiSection = styled.section`
	min-width: 1200px;
	height: 850px;
	background-color: ${cssUnit.backgroundColors.LightBlack};
`;

export const AiWrap = styled.article`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	margin: 0px auto;

	max-width: 950px;
	height: 100%;

	text-align: center;
`;

export const AiContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin: 0 auto;
	padding: 0px;

	width: 600px;
	max-width: 850px;
	height: 600px;
`;
export const SectionTitleW = styled.h2`
	font-size: ${cssUnit.fontSize.medium};
	color: white;
`;
export const SerachBarContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	width: 500px;
	height: 100px;
`;

export const SearchBarLayout = styled.div`
	top: 10px;
	right: 50px;
	margin: 0px;
	z-index: 10;
	div {
		margin: 0px;
		width: 300px;
		height: 50px;
		border-radius: 15px;
		background-color: #f6f6f6;

		input {
			margin: 0px;
			width: 200px;
			height: 30px;
			border-radius: 15px;
			border: solid rgba(255, 255, 255, 0);
			background-color: transparent;
			margin-right: 5px;
			margin-top: 5px;
		}

		span {
			top: 5px;
			right: 10px;
			cursor: pointer;
			&:hover {
				cursor: pointer;
			}
		}
	}
`;
export const AiExContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	width: 500px;
	height: 500px;

	background-color: white;
`;

export const AiChatRoomBox = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-color: white;

	width: 500px;
	height: 400px;

	background-color: ${cssUnit.colors.Gray};
`;

export const HumanBubble = styled.div`
	margin: 20px 5px 20px 70px;

	width: 400px;
	height: 60px;

	left: 392px;
	top: 317px;

	background-color: ${cssUnit.colors.White};

	filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

	line-height: 60px;
`;

export const AiBubble = styled.div`
	display: table;
	margin: 20px 70px 20px 30px;
	padding: 0 0 0 50px;

	width: 350px;
	height: 250px;

	left: 793px;
	top: 420px;

	background-color: ${cssUnit.colors.White};
	/* transform: matrix(-1, 0, 0, 1, 0, 0); */

	filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

export const AiChatButton = styled('button')`
	width: 500px;
	height: 100px;

	background-color: ${cssUnit.colors.DarkGold};
	border: 0;
	outline: 0;

	font-size: ${cssUnit.fontSize.medium};
	color: ${cssUnit.colors.White};
	font-weight: 400;

	&:hover {
		cursor: pointer;
	}
`;
