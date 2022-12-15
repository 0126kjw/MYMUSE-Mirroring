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
	h2 {
		//height: 80px;
		line-height: 30px;

		color: white;
		font-family: 'Gothic A1';
		//font-weight: 600;
		font-size: 20px;
		word-break: keep-all;

		//padding: 0 0 40px 0;

		@media screen and (max-width: 400px) {
			display: none;
		}
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

	width: 100%;
	max-width: 850px;
	height: 500px;

	margin: 0px auto;
	padding: 0px;

	@media screen and (max-width: 550px) {
		width: 80vw;
	}
`;

export const SerachBarContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	width: 100%;
	height: 100px;

	@media screen and (max-width: 550px) {
		width: 80vw;
	}
`;

export const SearchBarLayout = styled.div`
	margin: 0px;
	z-index: 0;

	div {
		width: 100%;
		padding: 2px;
		margin: 0px;
		cursor: pointer;

		border-radius: 10px;
		background-color: #f6f6f6;

		input {
			width: 150px;
			padding: 10px;
			border-radius: 15px;
			border: solid rgba(255, 255, 255, 0);
			background-color: transparent;
			cursor: pointer;
		}

		input[value='국립중앙박물관'] {
			font-family: ${cssUnit.fontFamily.NotoKR_G};
			font-size: 20px;
			color: ${cssUnit.colors.DarkGray};
		}

		/* span {
			cursor: pointer;
			&:hover {
				cursor: pointer;
			}
		} */
	}

	@media screen and (max-width: 300px) {
		display: none;
	}
`;
export const AiExContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	width: 60%;

	max-width: 400px;
	/* height: 500px; */

	background-color: white;

	border-radius: 10px;

	text-overflow: ellipsis;
	overflow: hidden;
	word-break: keep-all;
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
	text-align: right;

	width: 60%;
	max-width: 400px;

	margin: 4% 4% 4% 11%;
	background-color: ${cssUnit.colors.White};

	font-size: ${cssUnit.fontSize.small};
	/* line-height: 60px; */
	padding: 10px 10px 10px 10px;
	margin-right: -55px;

	filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

	@media screen and (max-width: 400px) {
		text-overflow: ellipsis;
		overflow: hidden;
		white-space: nowrap;
	}
`;

export const AiBubble = styled.div`
	display: table;
	width: 80%;
	max-width: 350px;

	margin: 4% 11% 4% 4%;
	padding: 10px 5px 10px 10px;

	background-color: ${cssUnit.colors.White};

	font-family: ${cssUnit.fontFamily.NotoKR_G};
	font-weight: 300;

	text-overflow: ellipsis;
	overflow: hidden;
	filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

	@media screen and (max-width: 400px) {
		text-overflow: ellipsis;
		overflow: hidden;
		//white-space: nowrap;

		display: -webkit-box;
		-webkit-line-clamp: 1;
		-webkit-box-orient: vertical;

		p {
			margin: 5px;
			//line-height: 20px;
			//padding-bottom: 43px;
			overflow: hidden;

			text-overflow: ellipsis;
			display: -webkit-box;
			-webkit-line-clamp: 1;
			-webkit-box-orient: vertical;
		}
	}
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

	font-family: ${cssUnit.fontFamily.Hahmlet};
	font-weight: 600;
	border-radius: 0px 0px 10px 10px;

	&:hover {
		cursor: pointer;
		background-color: ${cssUnit.colors.LightGold};
		color: ${cssUnit.colors.Black};
	}

	@media screen and (max-width: 400px) {
		text-overflow: ellipsis;
		overflow: hidden;

		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 1;
		-webkit-box-orient: vertical;
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

// //common Wrap title
export const SNSTitle = styled.h2`
	display: block;
	font-size: ${cssUnit.fontSize.medium};
	font-family: ${cssUnit.fontFamily.NotoKR_G};
	font-weight: 300;

	word-break: keep-all;

	color: ${(props) => {
		return props.color ? props.color : cssUnit.colors.Black;
	}};
`;

export const SNSSpaceLayout = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 222px;
	div {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		column-gap: 10px;

		justify-content: space-between;

		@media screen and (max-width: 400px) {
			height: 242px;
			grid-template-columns: repeat(1, 1fr);
			column-gap: 10px;
		}
	}
`;
