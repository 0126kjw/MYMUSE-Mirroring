import cssUnit from 'src/lib/cssUnit';
import styled from '@emotion/styled';

const aiChatRoomStyle = styled.div`
	.modalTopSection {
		width: 450px;
		position: fixed;
		/* bottom: 550px; */
		bottom: 600px;
		right: 30px;

		background-color: #222222;
		color: white;
		/* border-left: solid 3px ${cssUnit.colors.Gray};
		border-right: solid 3px ${cssUnit.colors.Gray}; */
		border-left: solid 3px gray;
		border-right: solid 3px gray;
		border-radius: 10px 10px 0px 0px;

		.ControlSection {
			display: flex;
			justify-content: space-between;
			align-items: center;
			height: 50px;
			margin-top: 5px;

			.Lbtn {
				background-color: #222222;
				border: solid 1px #222222;
				color: #997a4c;
				cursor: pointer;
			}

			.Rbtn {
				background-color: #222222;
				border: solid 1px #222222;
				color: #997a4c;
				cursor: pointer;
			}
		}

		.feedBackSection {
			display: flex;
			justify-content: center;
			align-items: center;
			border: solid 5px aliceblue;
			/* box-shadow: 15px 15px 15px 15px; */

			background-color: white;
			/* border: solid 5px lightgray; */
			color: black;

			/* padding: 5px; */
			margin: 5%;
			margin-top: 0px;
			margin-bottom: 25px;
			width: 90%;
			height: 30px;
			padding: 0px;

			-webkit-transition: box-shadow 0.5s;
			transition: box-shadow 0.5s;

			p {
				font-weight: bold;
			}
			&:hover {
				cursor: pointer;
				box-shadow: 15px 15px 15px 15px black;
			}
			&:active {
				cursor: pointer;
				box-shadow: 3px 3px 3px 3px gray inset;
			}
		}
	}

	.AImodal-Outer {
		text-align: center;

		transform: rotateZ(180deg);
		resize: both;
		overflow: auto;
		position: fixed;

		right: 30px;
		bottom: 96px;

		height: 550px;
		width: 450px;

		margin: 0 auto;
		background-color: #d9d9d9;
		/* border-left: solid 3px ${cssUnit.colors.Gray};
		border-right: solid 3px ${cssUnit.colors.Gray}; */
		border-left: solid 3px gray;
		border-right: solid 3px gray;
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
		background-color: #654321;
		background-color: gray;
		/* border-left: solid 3px ${cssUnit.colors.Gray};
		border-right: solid 3px ${cssUnit.colors.Gray}; */
		border-left: solid 3px gray;
		border-right: solid 3px gray;
		border-radius: 0px 0px 10px 10px;

		display: flex;
		justify-content: center;
		align-items: center;

		form {
			width: 85%;
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
			/* margin-top: 5px; */
			margin-right: 5px;
			padding: 0px;
			width: 40px;
			height: 55%;
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
