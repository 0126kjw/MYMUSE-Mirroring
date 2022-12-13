import cssUnit from 'src/lib/cssUnit';
import styled from '@emotion/styled';

const aiChatRoomStyle = styled.div`
	.AImodal-Outer {
		text-align: center;

		transform: rotateZ(180deg);
		resize: both;
		overflow: auto;
		position: fixed;

		right: 30px;
		bottom: 100px;

		height: 550px;
		width: 450px;

		margin: 0 auto;
		background-color: #d9d9d9;
	}

	.AImodal-Inner {
		transform: rotateZ(180deg);
		width: 100%;
		height: 100%;
		overflow: auto;
		/* -ms-overflow-style: none; */
	}

	.AImodal-Inner::-webkit-scrollbar {
		/* display: none; */
	}

	// 로고
	.modalTopSection {
		width: 450px;
		position: fixed;
		/* bottom: 550px; */
		bottom: 600px;
		right: 30px;
		display: flex;
		/* justify-content: center; */
		justify-content: space-between;
		align-items: center;
		background-color: #222222;
		color: white;
		height: 50px;

		.Lbtn {
			/* position: absolute; */
			/* right: 420px; */
			background-color: #222222;
			border: solid 1px #222222;
			color: #997a4c;
			cursor: pointer;
		}

		.Rbtn {
			/* position: absolute; */
			/* right: 10px; */
			background-color: #222222;
			border: solid 1px #222222;
			color: #997a4c;
			cursor: pointer;
		}
	}

	.AIsec2 {
		/* min-height: 400px; */
		min-height: 450px;
		overflow: scroll;

		padding-left: 7px;
		padding-right: 7px;

		-ms-overflow-style: none;
		scrollbar-width: none;

		.msgFromAI {
			float: left;
			background-color: #ffffff;
			margin: 1%;
			padding: 1%;
			text-align: left;
			min-height: 20px;
			border-radius: 10px;
			font-size: 18px;
			line-height: 30px;
			p {
				line-height: 20px;
			}
		}
		.msgFromHuman {
			float: right;
			background-color: ${cssUnit.colors.DarkGold};
			//background-color: #6e3a07;
			color: white;
			margin: 1%;
			padding: 1%;
			/* width: 70%; */
			min-height: 20px;
			border-radius: 10px;
			text-align: left;
		}

		.feedBack {
			background-color: blanchedalmond;

			color: black;
			margin: 1%;
			padding: 1%;

			display: flex;
			justify-content: center;
			align-items: center;
			border: solid 1px bisque;

			p {
				font-weight: bold;
				margin: 0%;
				padding: 0%;
			}
			&:hover {
				background-color: bisque;
				cursor: pointer;
				/* color: red; */
				border: solid 1px burlywood;
			}
		}

		.emptyBox {
			width: 100%;
			clear: both;
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

		background-color: ${cssUnit.colors.DarkGold};

		display: flex;
		justify-content: center;
		align-items: center;

		form {
			width: 100%;
			height: 80%;
			display: flex;
			justify-content: center;
			align-items: center;
			input {
				flex-direction: row;
				background-color: #ffffff;
				border-radius: 5px;
				border: solid 1px #d9d9d9;
				width: 95%;
				height: 30px;
				/* padding: 0px; */
			}
		}

		button {
			margin-top: 5px;
			margin-right: 5px;
			padding: 0px;
			width: 10%;
			height: 60%;
			border-radius: 10px;
			border: solid 1px #997a4c;
			background-color: black;
			color: white;
			font-size: 20px;
			cursor: pointer;
		}
	}
	/* ------------------------------------------------------ */
	.horListBox {
		/* max-width: 100%; */
		width: 100%;
		display: flex;
		overflow: scroll;
		background-color: #d9d9d9;

		/* 가로 스크롤 */
		overflow: auto;
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		justify-content: flex-start;
		/* 스크롤 없애기 */
		-ms-overflow-style: none;
		scrollbar-width: none;
		border-radius: 10px;
		a {
			text-decoration: none;
			color: black;
		}
	}

	.horListBox::-webkit-scrollbar {
		/* 스크롤 없애기 */
		display: none;
	}

	.horList {
		background: #ffffff;
		/* border: solid 1px ${cssUnit.colors.DarkGold}; */
		/* border-radius: 5px; */
		padding: 5px;
		/* margin: 5px; */
		min-width: 200px;
		height: 200px;
		overflow: hidden;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 0px;
	}
	.innerHorList {
		width: 170px;
		height: 170px;
		padding: 10px;
		border: solid 3px ${cssUnit.colors.DarkGold};
		background-color: ${cssUnit.backgroundColors.White};
		border-radius: 5px;
		overflow: hidden;

		&:hover {
			background-color: beige;
			cursor: pointer;
		}
		img {
			width: 150px;
			height: 100px;
			object-fit: cover;
		}
	}

	.singleOne {
		border: solid 1px ${cssUnit.colors.DarkGold};
		border-radius: 5px;
		padding: 5px;
		margin: 5px;
		width: 200px;
		height: 200px;
		overflow: hidden;
		display: flex;
		justify-content: center;
		align-items: center;
		background: #ffffff;
		&:hover {
			background-color: ${cssUnit.backgroundColors.Gray};
			background-color: beige;
			cursor: pointer;
		}
		img {
			width: 150px;
			height: 150px;
			object-fit: cover;
		}
	}
`;

export default aiChatRoomStyle;
