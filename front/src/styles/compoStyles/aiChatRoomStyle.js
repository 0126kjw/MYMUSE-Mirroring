import styled from '@emotion/styled';
import cssUnit from 'src/lib/cssUnit';

const aiChatRoomStyle = styled.div`
	.AImodal-Outer {
		border: solid #997a4c 1px;
		text-align: center;

		transform: rotateZ(180deg);
		resize: both;
		overflow: auto;
		position: fixed;

		right: 30px;
		bottom: 100px;

		height: 450px;
		width: 450px;

		margin: 0 auto;
		background-color: #d9d9d9;
		border-radius: 20px 20px 0px 20px;
	}

	.AImodal-Inner {
		transform: rotateZ(180deg);
		width: 100%;
		height: 100%;
		overflow: auto;
		-ms-overflow-style: none;
	}

	.AImodal-Inner::-webkit-scrollbar {
		display: none;
	}

	// 로고
	.chatBotControl {
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #222222;
		color: white;
		height: 50px;

		button {
			position: absolute;
			right: 10px;
			background-color: #222222;
			color: #997a4c;
			border: none;
			cursor: pointer;
		}
	}

	.AIsec2 {
		min-height: 400px;
		overflow: scroll;

		padding-left: 7px;
		padding-right: 7px;

		-ms-overflow-style: none; /* IE and Edge */
		scrollbar-width: none; /* Firefox */

		.msgFromAI {
			float: left;
			background-color: #ffffff;
			margin: 1%;
			padding: 1%;
			text-align: left;
			width: 70%;
			min-height: 20px;
			border-radius: 10px;
		}

		.msgFromHuman {
			float: right;
			background-color: ${cssUnit.colors.DarkGold};
			//background-color: #997a4c;
			//background-color: #6e3a07;
			color: white;
			margin: 1%;
			padding: 1%;
			text-align: right;
			width: 70%;
			min-height: 20px;
			border-radius: 10px;
		}
	}
	.AIsec2::-webkit-scrollbar {
		display: none; /* Chrome, Safari, Opera*/
	}

	.formDiv {
		position: fixed;
		bottom: 30px;
		right: 30px;
		width: 450px;
		height: 70px;
		border-radius: 20px;

		//background-color: #997a4c;
		//background-color: #6e3a07;
		background-color: ${cssUnit.colors.DarkGold};
		display: flex;
		justify-content: center;
		align-items: center;

		form {
			width: 100%;
			height: 80%;
			margin-top: 3%;
			margin-left: 3%;
		}
		input {
			flex-direction: row;
			background-color: #ffffff;
			border-radius: 10px;
			border: solid 1px #d9d9d9;
			width: 95%;
			height: 70%;
		}
		button {
			margin-top: 5px;
			margin-right: 5px;
			padding: 0px;
			width: 10%;
			height: 70%;
			border-radius: 10px;
			border: solid 1px #997a4c;
			background-color: black;
			color: white;
			font-size: 20px;
			cursor: pointer;
		}
	}

	.horListBox {
		/* width: 450px; */
		float: left;
		/* padding: 20px; */
		overflow: scroll;
		color: #112031;
		background: #ffffff;
		border: 1px solid #000;

		/* 가로 스크롤 */
		overflow: auto;
		/* white-space: nowrap; */

		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		justify-content: flex-start;
		/* 스크롤 없애기-1 */
		-ms-overflow-style: none;
		scrollbar-width: none;
	}

	.horListBox::-webkit-scrollbar {
		/* 스크롤 없애기-2 */
		display: none;
	}

	.horList {
		border: solid 1px black;
		padding: 10px;
		margin: 10px;
		width: 300px;
		height: 200px;
	}
`;

export default aiChatRoomStyle;
