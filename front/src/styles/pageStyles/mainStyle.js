import styled from '@emotion/styled';
import cssUnit from 'src/lib/cssUnit';

export const MainContainer = styled.div`
	width: auto !important;
	height: auto !important;
	.hegit-adjustment {
		margin-top: 30px;
	}
`;

export const MainTitleContainer = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;

	height: 200px;
	margin: 0px auto;
	margin-top: 20px;
	margin-bottom: 20px;

	// MY MUSE
	.logoImg {
		// position: absolute;
		height: 60px;
	}

	// 한곳에서 보는 온라인 AI 전시정보 팜플렛
	.logoText {
		height: 80px;
		line-height: 30px;

		color: white;
		font-family: 'Gothic A1';
		font-weight: 600;
		font-size: 20px;
	}
`;

export const SilderContainer = styled.div`
	width: 100%;
	height: 100%;

	max-width: 900px;
	max-height: 600px;

	margin: 0;
	padding: 0px;
`;

export const MapContainer = styled.div`
	width: 600px;
	width: 100%;
	max-width: 850px;
	height: 50.5%;

	margin: 0 auto;
	padding: 0px;
`;

// 챗봇 모형
export const AiContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	// width: 100%;
	// max-width: 850px;
	// height: 600px;

	margin: 0 auto;
	padding: 0px;
`;

export const SerachBarContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	width: 100%;
	height: 100px;
`;

export const SearchBarLayout = styled.div`
	margin: 0px;
	z-index: 0;

	div {
		width: 100%;
		padding: 2px;
		margin: 0px;

		border-radius: 10px;
		background-color: #f6f6f6;

		input {
			width: 150px;
			padding: 10px;
			border-radius: 15px;
			border: solid rgba(255, 255, 255, 0);
			background-color: transparent;
		}

		span {
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

	width: 100%;
	max-width: 500px;
	/* height: 500px; */

	background-color: white;

	border-radius: 10px;
`;

//Ai chat example css
export const AiChatRoomBox = styled.div`
	display: flex;

	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-color: white;

	width: 100%;
	max-width: 500px;

	background-color: ${cssUnit.colors.Gray};
	border-radius: 10px 10px 0px 0px;
`;

export const HumanBubble = styled.div`
	text-align: left;

	width: 80%;
	max-width: 400px;

	margin: 4% 4% 4% 11%;
	background-color: ${cssUnit.colors.White};

	font-size: ${cssUnit.fontSize.small};
	/* line-height: 60px; */
	padding: 10px;

	filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

export const AiBubble = styled.div`
	display: table;
	width: 80%;
	max-width: 350px;

	margin: 4% 14% 4% 6%;
	padding: 0 0 0 10px;

	background-color: ${cssUnit.colors.White};

	filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

export const AiChatButton = styled.button`
	width: 100%;
	max-width: 500px;
	height: 100px;

	background-color: ${cssUnit.colors.DarkGold};
	border: 0;
	outline: 0;

	font-size: ${cssUnit.fontSize.medium};
	color: ${cssUnit.colors.White};

	font-family: 'Noto serif KR', sans-serif;
	font-weight: 400;
	border-radius: 0px 0px 10px 10px;

	&:hover {
		cursor: pointer;
	}
`;

//sections
export const Logosection = styled.section`
	width: 131px;
	top: 90px;
	z-index: 2;

	&:hover {
		cursor: pointer;
	}
`;
