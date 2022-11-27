import styled from '@emotion/styled';
import cssUnit from 'lib/cssUnit';

export const MainContainer = styled.div`
	display: flex;
	flex-direction: column;

	width: auto !important;
	height: auto !important;
`;

/*containers*/
//logo
export const MainTitleContainer = styled.div`
	//for logo
	position: relative;

	display: flex;
	flex-direction: row;

	width: 950px;
	height: 80px;

	margin: 0px auto;

	.logoImg {
		padding-left: 40px;
		width: 300px;
		height: 80px;
	}
	span {
		padding-top: 40px;

		color: white;
		font-family: 'Gothic A1';
		font-weight: 600;
	}
`;

//		border: 3px solid rgba(255, 255, 255, 0.6);

export const SilderContainer = styled.div`
	width: 900px;
	max-width: 850px;
	height: 600px;

	margin: 0;
	padding: 0px;
`;

export const MapContainer = styled.div`
	width: 600px;
	max-width: 850px;
	height: 50.5%;

	margin: 0 auto;
	padding: 0px;
`;

export const AiContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	width: 600px;
	max-width: 850px;
	height: 600px;

	margin: 0 auto;
	padding: 0px;
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
		width: 300px;
		height: 50px;

		margin: 0px;

		border-radius: 15px;
		background-color: #f6f6f6;

		input {
			width: 200px;
			height: 30px;

			margin-right: 5px;
			margin-top: 5px;

			border-radius: 15px;
			border: solid rgba(255, 255, 255, 0);
			background-color: transparent;
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

//Ai chat example css
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
	width: 400px;
	height: 60px;

	margin: 20px 5px 20px 70px;

	left: 392px;
	top: 317px;

	background-color: ${cssUnit.colors.White};

	font-size: ${cssUnit.fontSize.small};
	line-height: 60px;

	filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

export const AiBubble = styled.div`
	display: table;

	width: 350px;
	height: 250px;

	margin: 20px 70px 20px 30px;
	padding: 0 0 0 50px;

	left: 793px;
	top: 420px;

	background-color: ${cssUnit.colors.White};

	filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

export const AiChatButton = styled.button`
	width: 500px;
	height: 100px;

	background-color: ${cssUnit.colors.DarkGold};
	border: 0;
	outline: 0;

	font-size: ${cssUnit.fontSize.medium};
	color: ${cssUnit.colors.White};

	font-family: 'Noto serif KR', sans-serif;
	font-weight: 400;

	&:hover {
		cursor: pointer;
	}
`;

//sections
export const Logosection = styled.section`
	width: 131px;
	height: 450px;

	top: 90px;
	z-index: 2;

	&:hover {
		cursor: pointer;
	}
`;
